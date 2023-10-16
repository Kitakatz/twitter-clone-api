"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tweets_1 = __importDefault(require("./mockData/tweets"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.get("/", (request, response) => {
    try {
        const id = request.body.id;
        const modifiedTweets = [...tweets_1.default];
        modifiedTweets[0].tweet = "New tweeeeeet:" + id;
        response.send({ tweets: modifiedTweets });
    }
    catch (error) {
        response.send("Response Failure");
    }
    ;
});
server.listen(3000, () => console.log('Server has started on port 3000'));
//# sourceMappingURL=index.js.map