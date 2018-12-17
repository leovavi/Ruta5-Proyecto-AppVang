// @flow
import * as React from "react";

import {Card, Feed, withTheme, StyleGuide} from "../components";
import TravelAPI from "./api";
import {StyleSheet} from "react-native";
import DropdownAlert from 'react-native-dropdownalert';

import type {City} from "../components/travel/Model";
import type {Post} from "../components/travel/Model";
import type {NavigationProps} from "../components";
import axios from "axios";

class Cities extends React.Component<NavigationProps<>> {
    
    state = {
        posts: [],
        loading: true,
        numPosts: 5,
        offset: 0
    }

    onEndReached = () =>{
        this.setState({
            loading: true
        });

        this.getPosts();
    }

    getPosts = () => {
        axios
            .get(`https://public-api.wordpress.com/rest/v1.1/sites/rutacincohn.com/posts/?number=${this.state.numPosts}&offset=${this.state.offset}`)
            .then(resp => {
                let newPosts = this.state.posts;
                newPosts = newPosts.concat(resp.data.posts);
                this.setState({
                    posts: newPosts,
                    loading: false,
                    offset: this.state.offset + this.state.numPosts
                });
            })
            .catch(err => {
                console.warn(err.message);
            })
    }

    saveBookmark = (post : Post) => {
        let book = require("./api/bookmarks.json");
        const element = JSON.parse(post);
        book = book.concat(element);

        book = JSON.stringify(book);
        console.warn(book);
        let fs = require("react-native-fs");
        fs.writeFile("./api/bookmarks.json", book, "utf8")
            .then((success) => {
                this.dropdown.alertWithType("error", "Se añadió a favoritos", post.title);
                console.warn(book);
            })
            .catch((err) =>{
                console.warn(err.message);
            });
    }

    async componentDidMount() : Promise<void> {
        this.setState({
            loading: true,
            offset: 0
        });

        this.getPosts();
    }

    renderItem = (post: Post): React.Node => {
        const {navigation} = this.props;
        return (
            <Card
                height={180}
                onPress={() => navigation.navigate("City", { post })}
                title={post.title}
                subtitle={post.author.name}
                onSaveBookmark = {this.saveBookmark}
                picture={{
                    uri: post.featured_image,
                    preview: post.featured_image
                }}
                style = {styles.content}
            />
        );
    }

    render(): React.Node {
        const {renderItem, onEndReached} = this;
        const {navigation} = this.props;
        const {loading} = this.state;
        const data = this.state.posts;
        const title = "Noticias";
        const threshold = 0.75;
        return (
            <Feed {...{data, renderItem, title, navigation, onEndReached, threshold, loading}} style={styles.content} />
        );
    }
}

const styles = StyleSheet.create({
    content: {
        paddingBottom: StyleGuide.spacing.tiny,
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 20
    }
});

export default withTheme(Cities);