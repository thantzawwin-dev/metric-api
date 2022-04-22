
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/metrics',
    createProxyMiddleware({
      // target: 'http://localhost:8001', // MyLocal
      target: 'http://10.55.55.28:8001',  // Server
      // target: 'http://kong-gateway:8001', // Serverdocker
      changeOrigin: true,
      headers: {
        "Connection": "keep-alive"
      },
    })
  );
};