const apis = ["/api/login", "/api/signup", "/api/maps/publish", "/api/maps/getAll", "/api/users/completedMap"];

/**
 * @type {import("next").NextConfig}
 */
module.exports = {
    compress: true,
    async rewrites() {
        return apis.map(des => ({
            source: des,
            destination: "https://rnd-sq-dev.herokuapp.com" + des
        }));
    },
    httpAgentOptions: {
        keepAlive: false,
    }
}