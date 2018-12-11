// @flow
import type {Travel} from "../../components/travel/Model";
import axios from 'axios';

const guides = require("./guides");
const post1 = require("./posts/post_1");
const post2 = require("./posts/post_2");
const post3 = require("./posts/post_3");
const paris = require("./cities/paris");
const venice = require("./cities/venice");
const sydney = require("./cities/sydney");
const newyork = require("./cities/newyork");
const test = require("./cities/test");

function getPosts () {
    axios 
        .get("https://public-api.wordpress.com/rest/v1.1/sites/rutacincohn.com/posts/")
        .then(resp => {
            return resp.data.posts;
        })
        .catch(err => {
            console.log(err);
        }) ;
}

const api: Travel = {
    guides,
    posts: [
        post1,
        post2,
        post3
    ]
};

export default api;
