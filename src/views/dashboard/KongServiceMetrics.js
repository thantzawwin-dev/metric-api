import React, { Suspense } from "react";
import * as _ from "lodash";
import { SectionContainer } from "../../components";
import { kongMetricUIConfig, kongGeneralMetricUIConfig } from "../../assets";
import { takeByNameOutOfKongMetricPropertyObj } from "../../helper";

const KongServiceMetrics = ({ metrics = [] }) => {
  const KongServiceRouteNames = takeByNameOutOfKongMetricPropertyObj(
    metrics,
    "route"
  );

  return (
    <div className="content_flex_box">
      <div>
        {KongServiceRouteNames.map((sRoutes, index) => (
          <div className="route_section" key={index}>
            <h4 className="route_name">Route = {sRoutes}</h4>
            {metrics.map((metric, index) => {
              if (kongMetricUIConfig.hasOwnProperty(metric["title"])) {
                if (
                  metric.hasOwnProperty("values") &&
                  metric["values"].length > 0
                ) {
                  return (
                    <SectionContainer
                      key={index} //title={metric.title} description={metric.description} metricType={metric.metricType}
                    >
                      {kongMetricUIConfig[metric["title"]].map(
                        (uiConfig, idx) => (
                          <Suspense key={idx} loading={<div>loading</div>}>
                            <uiConfig.element
                              title={metric.title}
                              description={metric.description}
                              metricType={metric.metricType}
                              values={metric["values"].filter(
                                (value) =>
                                  value.metricName === uiConfig.metricName &&
                                  value.metricProperty.route === sRoutes
                              )}
                            />
                          </Suspense>
                        )
                      )}
                    </SectionContainer>
                  );
                }
              }
            })}
          </div>
        ))}
      </div>

      <div>
        {metrics.map((metric, index) => {
          if (kongGeneralMetricUIConfig.hasOwnProperty(metric["title"])) {
            if (
              metric.hasOwnProperty("values") &&
              metric["values"].length > 0
            ) {
              return (
                <SectionContainer
                  key={index}
                  title={metric.title}
                  description={metric.description}
                  metricType={metric.metricType}
                >
                  {kongGeneralMetricUIConfig[metric["title"]].map(
                    (uiConfig, idx) => {
                      return (
                        <Suspense key={idx} loading={<div>loading</div>}>
                          <uiConfig.element
                            title={metric.title}
                            description={metric.description}
                            metricType={metric.metricType}
                            values={metric["values"].filter(
                              (value) =>
                                value.metricName === uiConfig.metricName
                            )}
                          />
                        </Suspense>
                      );
                    }
                  )}
                </SectionContainer>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default KongServiceMetrics;
