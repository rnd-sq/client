const apis = ["/api/users/login", "/api/users/signup", "/api/maps/publish", "/api/maps/all", "/api/maps/rate"];

/**
 * @type {import("next").NextConfig}
 */
module.exports = {
    compress: true,
    async rewrites() {
        return apis.map(des => ({
            source: des,
            destination: "http://localhost:5000" + des
        }));
    },
    httpAgentOptions: {
        keepAlive: false,
    }
}