const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['cdn.pixabay.com', 's3.amazonaws.com'],
  },
  env: {
    SERVER_API: `http://localhost:3000`,
  },
};
