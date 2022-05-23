/**
 * @type {import("next").NextConfig}
 */
module.exports = {
    compress: true,
    async rewrites() {
        return [
            {
                source: "/api/login",
                destination: "https://rnd-sq-dev.herokuapp.com/login"
            },
            {
                source: "/api/signup",
                destination: "https://rnd-sq-dev.herokuapp.com/signup"
            }
        ];
    }
}