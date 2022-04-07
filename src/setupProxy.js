
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/metrics',
    createProxyMiddleware({
      target: 'http://localhost:8001',
      // changeOrigin: true,
      headers: {
        "Connection": "keep-alive"
      },
    })
  );
};