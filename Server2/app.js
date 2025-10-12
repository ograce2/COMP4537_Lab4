const http = require("http");
const url = require("url");
const Dictionary = require("./modules/dictionary.js").default;

const PORT = 8080;
const POST = "POST";
const GET = "GET";

class Server {
    static dict = new Dictionary();
    static startServer() {
        const server = http.createServer((req, res) => {
            res.writeHead(200, {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
            });

            if (req.method === POST) {
                let body = "";
                req.on("data", function (chunk) {
                    if (chunk != null) {
                        body += chunk;
                    }
                });

                req.on("end", function () {
                    let q = url.parse(body, true);
                    let response = Server.dict.storeDefinition(q.query["word"], q.query["def"]);
                    res.end(response);
                });
            } else if (req.method === GET) {
                console.log("GET");
                let q = url.parse(req.url, true);

                const word = q.query["word"];
                let definition = Server.dict.searchDefinition(word);
                res.end(definition);
            } else {
                console.log("not post and not get :( ");
            }
        });

        server.listen(PORT);
        console.log(`Server is running and listening on port ${PORT}`);
    }
}

Server.startServer();