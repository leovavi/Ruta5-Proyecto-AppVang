// @flow
import * as React from "react";
import {View, StyleSheet} from "react-native";

import {Card, Feed} from "../components";

import TravelAPI from "./api";

import type {NavigationProps} from "../components";
import type {Action} from "../components/Model";
import type {Guide} from "../components/travel/Model";
import type {Post} from "../components/travel/Model";

import axios from "axios";

type Chunk = {
    id: string,
    guides: Guide[]
};

export default class Guides extends React.Component<NavigationProps<>> {

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

    renderItem = (post: Post): React.Node => {
        const {navigation} = this.props;
        return (
            //<View style={styles.row}>
                <Card
                    key={post.id}
                    title={""}
                    //subtitle={guide.country}
                    //description={`${guide.duration} days`}
                    picture={{
                        uri: post.featured_image,
                        preview: post.featured_image
                    }}
                    //height={chunk.guides.length === 1 ? 300 : 175}
                    height={300}
                />
            //</View>
        );
    }

    async componentDidMount() : Promise<void> {
        this.setState({
            loading: true,
            offset: 0
        });

        this.getPosts();
    }

    render(): React.Node {
        const {renderItem, onEndReached} = this;
        const {navigation} = this.props;
        const {loading} = this.state;
        const data = this.state.posts;
        const title = "Galeria";
        return (
            <Feed {...{data, renderItem, title, navigation, onEndReached, loading}} />
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row"
    }
});
