/**
 * @type {import("next").NextConfig}
 */
module.exports = {
    compress: true,
    async rewrites() {
        return [
            {
                source: "/login",
                destination: "rnd-sq-dev.herokuapp.com/login"
            },
            {
                source: "/signup",
                destination: "rnd-sq-dev.herokuapp.com/signup"
            }
        ];
    }
}