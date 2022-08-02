import Cors from "cors";

const API_HELPER = {
    api_url: process.env.API_URL ? process.env.API_URL : "https://api.blockblend.io/",

    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer "+"bd5c7e6a05cc3f8fbbf7b265e397da37f62928f0",
    },

    runMiddleware: (req, res) => {
        const fn = Cors({
            methods: ["GET", "HEAD"],
        });

        return new Promise((resolve, reject) => {
            fn(req, res, (result) => {
                if (result instanceof Error) {
                    return reject(result);
                }

                return resolve(result);
            });
        });
    },

    get: (url) => {

        console.log("URL", url);
        return new Promise((resolve, reject) => {

            console.log("API_HELPER.api_url", API_HELPER.api_url);
            fetch(API_HELPER.api_url + url, {
                method: "get",
                headers: API_HELPER.headers,
            })
                .then((response) => {
                    response
                        .json()
                        .then((content) => {
                            if (content.error) {
                                return reject(content.message);
                            }

                            return resolve(content);
                        })
                        .catch(() => {
                            return reject(false);
                        });
                })
                .catch((error) => {

                    console.log("error", error);
                    return resolve(error);
                });
        });
    },

    post: (url, data) => {
        return new Promise((resolve, reject) => {
            fetch(API_HELPER.api_url + url, {
                method: "post",
                headers: API_HELPER.headers,
                body: JSON.stringify(data),
            })
                .then((response) => {
                    response
                        .json()
                        .then((content) => {
                            if (content.error) {
                                return reject(content.message);
                            }

                            return resolve(content);
                        })
                        .catch(() => {
                            return reject(false);
                        });
                })
                .catch((error) => {
                    return resolve(error);
                });
        });
    },
};

export default API_HELPER;
