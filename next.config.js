// const withPWA = require('next-pwa');
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
});

module.exports = withPWA({
    pwa: {
        dest: "public",
    },
});
//module.exports = {
//reactStrictMode: true,
//}
