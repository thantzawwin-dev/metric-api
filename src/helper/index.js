export const kongMetricsPropertyToObject = (str) => {
  var jsonStr = str.replace(/(\w+=)|(\w+ =)/g, function(s) {
    return '"' + s.substring(0, s.length-1) + '":';
  });
  
  return JSON.parse(jsonStr);
}

export const KongMetricsResponseConverter = (metrics) => {
  let resultArray = [];
  const searchTerm = '# HELP ';
  const searchTerm2 = '# TYPE ';
  const metricsArray = metrics.split(searchTerm);
  // const indexOfFirst = metrics.indexOf(searchTerm, (indexOfFirst + 1))
  metricsArray.forEach(itemGroup => {
    const itemGroupArray = itemGroup.split('\n');
    let newObj = {};
    newObj.values = [];
    itemGroupArray.forEach((item, index) => {
      if(item !== "")
      {
        let metricProperty = null;
        let metricValue = null;
        if(index === 0) {
          const indexOfFirst = item.indexOf(' ');
          newObj.name = item.substring(0, indexOfFirst);
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
            // metricProperty = kongMetricsPropertyToObject(item.substring(indexOfFirst, indexOfEnd+1));
            metricProperty = item.substring(indexOfFirst, indexOfEnd+1);
            metricValue = item.substring(indexOfEnd+2, item.length)
          }else{
            metricProperty = null;
            metricValue = item.substring(item.indexOf(' ')+1, item.length);
          }; 
          newObj.values.push({ metricProperty, metricValue });
        }
      }
    })
    if(!_.isEmpty(newObj)) resultArray.push(newObj);
  });
  return resultArray;
}