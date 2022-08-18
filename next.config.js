const apis = ["/api/users/login", "/api/users/signup", "/api/maps/publish", "/api/maps/all", "/api/users/completedMaps", "/api/maps/rate"];

/**
 * @type {import("next").NextConfig}
 */
module.exports = {
    compress: true,
    async rewrites() {
        return apis.map(des => ({
            source: des,
            destination: (process.env.NODE_ENV === "production" ? "https://rnd-sq-dev.herokuapp.com" : "http://localhost:5000") + des
        }));
    },
    httpAgentOptions: {
        keepAlive: false,
    }
}