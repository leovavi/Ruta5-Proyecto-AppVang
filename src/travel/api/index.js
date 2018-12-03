// @flow
import type {Travel} from "../../components/travel/Model";

const guides = require("./guides");
const post1 = require("./posts/post_1");
const post2 = require("./posts/post_2");
const post3 = require("./posts/post_3");
const paris = require("./cities/paris");
const venice = require("./cities/venice");
const sydney = require("./cities/sydney");
const newyork = require("./cities/newyork");
const test = require("./cities/test");

const api: Travel = {
    guides,
    cities: [
        post1,
        post2,
        post3
    ]
};

export default api;
