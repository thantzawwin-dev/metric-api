const mockText = `# HELP kong_bandwidth Total bandwidth in bytes consumed per service/route in Kong
# TYPE kong_bandwidth counter
kong_bandwidth{service="fake-api",route="fake-api-route",type="egress"} 3004
kong_bandwidth{service="fake-api",route="fake-api-route",type="ingress"} 2180
# HELP kong_datastore_reachable Datastore reachable from Kong, 0 is unreachable
# TYPE kong_datastore_reachable gauge
kong_datastore_reachable 1
# HELP kong_db_entities_total Total number of Kong db entities
# TYPE kong_db_entities_total gauge
kong_db_entities_total 5
# HELP kong_db_entity_count_errors Errors during entity count collection
# TYPE kong_db_entity_count_errors counter
kong_db_entity_count_errors 0
# HELP kong_enterprise_license_errors Errors when collecting license info
# TYPE kong_enterprise_license_errors counter
kong_enterprise_license_errors 8
# HELP kong_http_status HTTP status codes per service/route in Kong
# TYPE kong_http_status counter
kong_http_status{service="fake-api",route="fake-api-route",code="200"} 1
kong_http_status{service="fake-api",route="fake-api-route",code="304"} 2
# HELP kong_latency Latency added by Kong, total request time and upstream latency for each service/route in Kong
# TYPE kong_latency histogram
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="1"} 1
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="2"} 1
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="5"} 1
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="7"} 1
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="10"} 1
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="15"} 1
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="20"} 2
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="25"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="30"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="40"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="50"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="60"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="70"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="80"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="90"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="100"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="200"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="300"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="400"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="500"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="1000"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="2000"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="5000"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="10000"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="30000"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="60000"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="kong",le="+Inf"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="request",le="2000"} 2
kong_latency_bucket{service="fake-api",route="fake-api-route",type="request",le="5000"} 2
kong_latency_bucket{service="fake-api",route="fake-api-route",type="request",le="10000"} 2
kong_latency_bucket{service="fake-api",route="fake-api-route",type="request",le="30000"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="request",le="60000"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="request",le="+Inf"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="upstream",le="2000"} 2
kong_latency_bucket{service="fake-api",route="fake-api-route",type="upstream",le="5000"} 2
kong_latency_bucket{service="fake-api",route="fake-api-route",type="upstream",le="10000"} 2
kong_latency_bucket{service="fake-api",route="fake-api-route",type="upstream",le="30000"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="upstream",le="60000"} 3
kong_latency_bucket{service="fake-api",route="fake-api-route",type="upstream",le="+Inf"} 3
kong_latency_count{service="fake-api",route="fake-api-route",type="kong"} 3
kong_latency_count{service="fake-api",route="fake-api-route",type="request"} 3
kong_latency_count{service="fake-api",route="fake-api-route",type="upstream"} 3
kong_latency_sum{service="fake-api",route="fake-api-route",type="kong"} 44
kong_latency_sum{service="fake-api",route="fake-api-route",type="request"} 12940
kong_latency_sum{service="fake-api",route="fake-api-route",type="upstream"} 12896
# HELP kong_memory_lua_shared_dict_bytes Allocated slabs in bytes in a shared_dict
# TYPE kong_memory_lua_shared_dict_bytes gauge
kong_memory_lua_shared_dict_bytes{shared_dict="kong",kong_subsystem="http"} 40960
kong_memory_lua_shared_dict_bytes{shared_dict="kong_cluster_events",kong_subsystem="http"} 40960
kong_memory_lua_shared_dict_bytes{shared_dict="kong_core_db_cache",kong_subsystem="http"} 806912
kong_memory_lua_shared_dict_bytes{shared_dict="kong_core_db_cache_miss",kong_subsystem="http"} 90112
kong_memory_lua_shared_dict_bytes{shared_dict="kong_counters",kong_subsystem="http"} 20480
kong_memory_lua_shared_dict_bytes{shared_dict="kong_db_cache",kong_subsystem="http"} 811008
kong_memory_lua_shared_dict_bytes{shared_dict="kong_db_cache_miss",kong_subsystem="http"} 86016
kong_memory_lua_shared_dict_bytes{shared_dict="kong_healthchecks",kong_subsystem="http"} 40960
kong_memory_lua_shared_dict_bytes{shared_dict="kong_keyring",kong_subsystem="http"} 40960
kong_memory_lua_shared_dict_bytes{shared_dict="kong_locks",kong_subsystem="http"} 61440
kong_memory_lua_shared_dict_bytes{shared_dict="kong_process_events",kong_subsystem="http"} 45056
kong_memory_lua_shared_dict_bytes{shared_dict="kong_rate_limiting_counters",kong_subsystem="http"} 86016
kong_memory_lua_shared_dict_bytes{shared_dict="kong_reports_consumers",kong_subsystem="http"} 73728
kong_memory_lua_shared_dict_bytes{shared_dict="kong_reports_routes",kong_subsystem="http"} 16384
kong_memory_lua_shared_dict_bytes{shared_dict="kong_reports_services",kong_subsystem="http"} 16384
kong_memory_lua_shared_dict_bytes{shared_dict="kong_reports_workspaces",kong_subsystem="http"} 16384
kong_memory_lua_shared_dict_bytes{shared_dict="kong_vitals",kong_subsystem="http"} 16384
kong_memory_lua_shared_dict_bytes{shared_dict="kong_vitals_counters",kong_subsystem="http"} 315392
kong_memory_lua_shared_dict_bytes{shared_dict="kong_vitals_lists",kong_subsystem="http"} 16384
kong_memory_lua_shared_dict_bytes{shared_dict="prometheus_metrics",kong_subsystem="http"} 65536
# HELP kong_memory_lua_shared_dict_total_bytes Total capacity in bytes of a shared_dict
# TYPE kong_memory_lua_shared_dict_total_bytes gauge
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong",kong_subsystem="http"} 5242880
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_cluster_events",kong_subsystem="http"} 5242880
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_core_db_cache",kong_subsystem="http"} 134217728
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_core_db_cache_miss",kong_subsystem="http"} 12582912
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_counters",kong_subsystem="http"} 1048576
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_db_cache",kong_subsystem="http"} 134217728
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_db_cache_miss",kong_subsystem="http"} 12582912
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_healthchecks",kong_subsystem="http"} 5242880
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_keyring",kong_subsystem="http"} 5242880
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_locks",kong_subsystem="http"} 8388608
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_process_events",kong_subsystem="http"} 5242880
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_rate_limiting_counters",kong_subsystem="http"} 12582912
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_reports_consumers",kong_subsystem="http"} 10485760
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_reports_routes",kong_subsystem="http"} 1048576
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_reports_services",kong_subsystem="http"} 1048576
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_reports_workspaces",kong_subsystem="http"} 1048576
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_vitals",kong_subsystem="http"} 1048576
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_vitals_counters",kong_subsystem="http"} 52428800
kong_memory_lua_shared_dict_total_bytes{shared_dict="kong_vitals_lists",kong_subsystem="http"} 1048576
kong_memory_lua_shared_dict_total_bytes{shared_dict="prometheus_metrics",kong_subsystem="http"} 5242880
# HELP kong_memory_workers_lua_vms_bytes Allocated bytes in worker Lua VM
# TYPE kong_memory_workers_lua_vms_bytes gauge
kong_memory_workers_lua_vms_bytes{pid="2071",kong_subsystem="http"} 49241563
kong_memory_workers_lua_vms_bytes{pid="2072",kong_subsystem="http"} 189463042
kong_memory_workers_lua_vms_bytes{pid="2073",kong_subsystem="http"} 50117101
kong_memory_workers_lua_vms_bytes{pid="2074",kong_subsystem="http"} 48796814
# HELP kong_nginx_http_current_connections Number of HTTP connections
# TYPE kong_nginx_http_current_connections gauge
kong_nginx_http_current_connections{state="accepted"} 15
kong_nginx_http_current_connections{state="active"} 1
kong_nginx_http_current_connections{state="handled"} 15
kong_nginx_http_current_connections{state="reading"} 0
kong_nginx_http_current_connections{state="total"} 27
kong_nginx_http_current_connections{state="waiting"} 0
kong_nginx_http_current_connections{state="writing"} 1
# HELP kong_nginx_metric_errors_total Number of nginx-lua-prometheus errors
# TYPE kong_nginx_metric_errors_total counter
kong_nginx_metric_errors_total 0
# HELP kong_nginx_timers Number of nginx timers
# TYPE kong_nginx_timers gauge
kong_nginx_timers{state="pending"} 14
kong_nginx_timers{state="running"} 0`

export default mockText