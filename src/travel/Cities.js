// @flow
import * as React from "react";

import {Card, Feed} from "../components";
import TravelAPI from "./api";

import type {City} from "../components/travel/Model";
import type {Post} from "../components/travel/Model";
import type {NavigationProps} from "../components";
import axios from "axios";

export default class Cities extends React.Component<NavigationProps<>> {
    
    state = {
        posts: []
    }

    renderItem = (post: Post): React.Node => {
        const {navigation} = this.props;
        return (
            <Card
                height={180}
                onPress={() => navigation.navigate("City", { post })}
                title={post.title}
                subtitle={post.author.name}
                picture={post.picture}
            />
        );
    }

    render(): React.Node {
        const {renderItem} = this;
        const {navigation} = this.props;
        const data = TravelAPI.posts;
        const title = "Posts";
        return (
            <Feed {...{data, renderItem, title, navigation}} />
        );
    }
}
