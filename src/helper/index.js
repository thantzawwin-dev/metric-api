import moment from 'moment'
import * as _ from 'lodash'

// just only for only Kong metrics

export const takeByNameOutOfKongMetricPropertyObj = (metrics = [], byName = "") => {
  // console.log("takeByNameOutOfKongMetricPropertyObj")
  let serviceNames = []
  metrics && metrics.map(metric => {
    if(metric.values && metric.values.length > 0) {
      metric.values.map((value, index) => {
        if(value.hasOwnProperty('metricProperty') && value['metricProperty'] && value['metricProperty'].hasOwnProperty(byName)) {
          if(!serviceNames.includes(value['metricProperty'][byName])) 
            serviceNames.push(value['metricProperty'][byName]);
        }
      })
    }
  })
  return serviceNames
}

export const filterMetricWithoutService = (metrics = []) => {
  // console.log("takeServiceMetricOutOfKongMetrics")
  let services = []
  metrics && metrics.map(metric => {
    if(metric.values && metric.values.length > 0)
      if(metric.values.filter(value => value.hasOwnProperty('metricProperty') && value['metricProperty'] && !value['metricProperty'].hasOwnProperty('service')
      )[0])
        services.push(Object.assign({}, metric))
      else if(metric.values.filter(value => !value.hasOwnProperty('metricProperty'))[0])
        services.push(Object.assign({}, metric))
  })
  return services
}

export const filterMetricWithKeyName = (metrics = [], keyName = "") => {
  // console.log("takeServiceMetricOutOfKongMetrics")
  let services = []
  metrics && metrics.map(metric => {
    if(metric.values && metric.values.length > 0)
      if(metric.values.filter(value => value.hasOwnProperty('metricProperty') && value['metricProperty'] && value['metricProperty'].hasOwnProperty(keyName)
      )[0])
        services.push(Object.assign({}, metric))
  })
  return services
}

const splicSpecificServiceByKeyName = (metrics = [], name = "", keyName = "") => {
  // console.log("splicSpecificServiceByKeyName")
  let arrObj = [];
  metrics.map((metric, i) => {
    arrObj[i] = {};
      for (let m in metric) {
        if(m === "values") {
          arrObj[i][m] = metric.values.filter(value => value.hasOwnProperty('metricProperty') && value['metricProperty'] 
          && value['metricProperty'].hasOwnProperty(keyName) && value['metricProperty'][keyName] === name)
        } else {
          arrObj[i][m] = metric[m];
        }
      }
  })
  return arrObj;
}

export const splitSpecificServiceMetric = (metrics = []) => {
  // console.log("splitServiceMetric")
  var services = {}
  let serviceNames = takeByNameOutOfKongMetricPropertyObj(metrics, 'service');
  if(serviceNames && serviceNames.length > 0) {
    serviceNames.map(sName => {
      services[sName] = splicSpecificServiceByKeyName(metrics, sName, 'service')
    })
  }
  return services;
}



export const createPageRouteByKongService = (array = [], element) => {
  // console.log("createPageRouteByKongService")
  var ste = array.map(str => (
    {
      path: `/${str}`, 
      exact: true, 
      name: str, 
      element
    }
  ))
  return ste;
}

export const setHTTPStatusChartData = (values, labelKey, bgColors = [], dataProps) => {
  let data = {};
  let labels = []; 
  let datasetsLabel = "";
  let datasetsData = [];
  let datasetsBackground = [];
  if(values && values.length > 0)
  {
    values.map((v, index) => {
      labels.push(v.metricProperty[labelKey]);
      datasetsLabel = v.metricName;
      datasetsData.push(v.metricValue);
      datasetsBackground.push(
        bgColors[Number(v.metricProperty[labelKey])] || bgColors[v.metricProperty[labelKey][0] + "xx"] 
        || bgColors["0xx"]
      );
    })
    data = {
      labels: labels,
      datasets: [
        {
          label: datasetsLabel,
          data: datasetsData,
          backgroundColor: datasetsBackground,
          ...dataProps,
        }
      ]
    }
  }
  return data
}

export const kongMetricsPropertyToObject = (str) => {
  var jsonStr = str.replace(/(\w+=)|(\w+ =)/g, function(s) {
    return '"' + s.substring(0, s.length-1) + '":';
  });
  
  return JSON.parse(jsonStr);
}

export const kongMetricsResponseConverter = (metrics) => {
  // console.log("Original Metric = >>>", metrics)
  let resultArray = [];
  const searchTerm = '# HELP ';
  const searchTerm2 = '# TYPE ';
  const metricsArray = metrics.split(searchTerm);
  // const indexOfFirst = metrics.indexOf(searchTerm, (indexOfFirst + 1))
  metricsArray.forEach((itemGroup, idx) => {
    const itemGroupArray = itemGroup.split('\n');
    let newObj = {};
    let values = [];
    itemGroupArray.forEach((item, index) => {
      if(item !== "")
      {
        let metricName = null;
        let metricProperty = null;
        let metricValue = null;
        if(index === 0) {
          const indexOfFirst = item.indexOf(' ');
          newObj.title = item.substring(0, indexOfFirst);
          newObj.description = item.substring(indexOfFirst+1, item.length);
        }
        else if(index === 1) {
          const duplicateName = item.substring(item.indexOf(searchTerm2)+searchTerm2.length, item.indexOf(' '));
          const indexOfFirst = item.indexOf(' ', duplicateName.length+1);
          newObj.metricType = item.substring(indexOfFirst+1, item.length);
        }
        else
        {
          const indexOfFirst = item.indexOf('{');
          const indexOfEnd = item.indexOf('}');
          if(indexOfFirst >= 0 && indexOfEnd >= 0) {
            metricName = item.substring(0, indexOfFirst);
            metricProperty = kongMetricsPropertyToObject(item.substring(indexOfFirst, indexOfEnd+1));
            // metricProperty = item.substring(indexOfFirst, indexOfEnd+1);
            metricValue = item.substring(indexOfEnd+2, item.length)
          }else{
            metricName = item.substring(0, item.indexOf(' '));
            metricProperty = null;
            metricValue = item.substring(item.indexOf(' ')+1, item.length);
          }; 
          values.push({ metricName, metricProperty, metricValue });
        }
      }
    })
    if(!_.isEmpty(newObj)) {
      newObj.values = values;
      resultArray.push(newObj);
    }
  });
  // console.log("Result Metric = >>>", resultArray)
  return resultArray;
}

export const Helper = {

  //utility function
  copyArrayObjByNoRef: (paramArrObj) => { // To make no Reference between Origin [Object] & Temp [Object]
    let arrObj = [];
    for (var i = 0; i < paramArrObj.length; i++) {
      arrObj[i] = {};
      for (var prop in paramArrObj[i]) {
        arrObj[i][prop] = paramArrObj[i][prop];
      }
    }
    return arrObj;
  },
  copyObjByNoRef: (paramObj) => { // To make no Reference between Origin [Object] & Temp [Object]
    let obj = {};
    for (var prop in paramObj) {
      obj[prop] = paramObj[prop];
    }
    return obj;
  },
  getRandom: function(size) {
    return Math.floor(Math.random() * (Math.pow(10,size)));
  },
  getRandomMinMax: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  leftPad: function (number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
  },

  //validation
  // is_Date: (date) => {
  //   return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
  // },
  // _Date: (date) => {
  //   if ( Object.prototype.toString.call(date) === "[object Date]" )  return true;
  //   return false;   
  // },is
  is_Date: (date) => {
    return Date.parse(date) ? true : false;
  },
  // is_Date: (date) => {
  //   return moment(date, 'YYYY-MM-DD[T]HH:mm:ss').isValid();
  // },

  //format
	thousandSeparator: (num) => {
		return String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,');
  },
  dmyDateTimeFormat: (datetime) => {
    return moment(datetime).format('DD/MM/YYYY HH:mm:ss');
  },
  mdyDateTimeFormat: (datetime) => {
    return moment(datetime).format('MM/DD/YYYY HH:mm:ss');
  },
  dmyDateFormat: (datetime) => {
    return moment(datetime).format('DD/MM/YYYY');
  },
  decimalTwo: (num) => {
    if (!isNaN(num))
      return parseFloat(num).toFixed(2);
    else
      return num;
  },
  moneyFormat: (num) => {
    return Helper.thousandSeparator(num);
  },
  moneyFormatWithDecimal: (num) => {
    return Helper.thousandSeparator(Helper.decimalTwo(num));
  },
  randomColor: () => {
    let hexString = "0123456789abcdef";
    let hexCode = "#";
    for(let i = 0; i < 6; i++){
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
    //Math.floor(Math.random()*16777215).toString(16)
  },
	
	//sorting 
	getClassNamesFor: (sortConfig, name) => {
    // let { sortConfig } = this.props;
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  },

  useSortableData: (items, config = null, sortConfig) => {
    // const [sortConfig, setSortConfig] = React.useState(config);
    try {
      const sortedItems = 
      // React.useMemo(
      () => 
      {
        let sortableItems = Helper.copyArrayObjByNoRef([...items]);
        if (sortConfig !== null) {
          sortableItems.sort((a, b) => {
            if (Helper.is_Date(a[sortConfig.key]) && Helper.is_Date(b[sortConfig.key])) {
              const date1 = new Date(a[sortConfig.key]);
              const date2 = new Date(b[sortConfig.key]);
              if (date1.getTime() < date2.getTime()) {
                return sortConfig.direction === 'sorting_asc' ? -1 : 1;
              }
              if (date1.getTime() > date2.getTime()) {
                return sortConfig.direction === 'sorting_asc' ? 1 : -1;
              }
              return 0;
            }
            if (!isNaN(a[sortConfig.key]) && !isNaN(b[sortConfig.key]) 
              && (sortConfig.key.toLowerCase().indexOf('amount') !== -1 || sortConfig.key.toLowerCase().indexOf('balance') !== -1
              || sortConfig.key.toLowerCase().indexOf('debit') !== -1 || sortConfig.key.toLowerCase().indexOf('credit') !== -1)
            ) {
              if (parseInt(a[sortConfig.key] || "0") < parseInt(b[sortConfig.key] || "0")) {
                return sortConfig.direction === 'sorting_asc' ? -1 : 1;
              }
              if (parseInt(a[sortConfig.key] || "0") > parseInt(b[sortConfig.key] || "0")) {
                return sortConfig.direction === 'sorting_asc' ? 1 : -1;
              }
              return 0;
            }
            if (!a[sortConfig.key])
            a[sortConfig.key] = "";
            if (!b[sortConfig.key])
            b[sortConfig.key] = "";
            if (a[sortConfig.key].toLowerCase() < b[sortConfig.key].toLowerCase()) {
              return sortConfig.direction === 'sorting_asc' ? -1 : 1;
            }
            if (a[sortConfig.key].toLowerCase() > b[sortConfig.key].toLowerCase()) {
              return sortConfig.direction === 'sorting_asc' ? 1 : -1;
            }
            return 0;
          });
        }
        return sortableItems;
      }
      return { items: sortedItems() };
    } catch(ex) {
      console.error(">", ex);
    }
  },
  getClickableLink: link => {
    return link.startsWith("http://") || link.startsWith("https://") ? link : `http://${link}`;
  },
}