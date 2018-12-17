// @flow
import * as React from "react";

import {Card, Feed, withTheme, StyleGuide} from "../components";
import TravelAPI from "./api";
import {StyleSheet} from "react-native";
import {withPlayer} from "../components/music"

import type {City} from "../components/travel/Model";
import type {Post} from "../components/travel/Model";
import type {NavigationProps} from "../components";
import axios from "axios";

class Bookmarks extends React.Component<NavigationProps<>> {
    
    state = {
        posts: []
    }

    getPosts = () => {
        const bookmarks = require("./api/bookmarks.json");

        this.setState({
            posts: bookmarks
        })
    }

    async componentDidMount() : Promise<void> {
        this.setState({
            loading: true,
            offset: 0
        });

        this.getPosts();

        let book = require("./api/bookmarks.json");
        let query = {
            title: "hello",
            content: "bye"
        }

        if(book.indexOf(query) != -1)
            console.warn("Incluido");
        else{
            console.warn("No Incluido");
            console.warn(book);
            console.warn(query);
        }
    }

    renderItem = (post: Post): React.Node => {
        const {navigation} = this.props;
        return (
            <Card
                height={180}
                onPress={() => navigation.navigate("City", { post })}
                title={post.title}
                subtitle={post.author.name}
                picture={{
                    uri: post.featured_image,
                    preview: post.featured_image
                }}
                style = {styles.content}
            />
        );
    }

    render(): React.Node {
        const {renderItem} = this;
        const {navigation} = this.props;
        const data = this.state.posts;
        const title = "Bookmarks";
        return (
            <Feed {...{data, renderItem, title, navigation}} />
        );
    }
}

const styles = StyleSheet.create({
    content: {
        paddingBottom: StyleGuide.spacing.small
    }
});

export default withTheme(Bookmarks);