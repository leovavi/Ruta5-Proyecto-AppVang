// @flow
import * as React from "react";
import {StyleSheet, View, Dimensions, ScrollView } from "react-native";
import HTML from 'react-native-render-html';


import {
    Container, Header, NavigationBar, Text, BaseCard, Button, Content, StyleGuide, notImplementedYet,
    type NavigationProps
} from "../components";

import type {Post} from "../components/travel/Model";

export default class CityScreen extends React.PureComponent<NavigationProps<{ post: Post }>> {

    render(): React.Node {
        const {navigation} = this.props;
        const {post} = navigation.state.params;
        const rightAction = {
            icon: "bookmark",
            onPress: notImplementedYet
        };
        return (
            <Container>
                <Header title={post.title} picture={post.picture}>
                    <NavigationBar type="transparent" back="Posts" {...{navigation, rightAction}} />
                </Header>
                <Content>
                    <BaseCard>
                        <ScrollView style={{ flex: 1 }}>
                            <HTML html={post.content} imagesMaxWidth={Dimensions.get("window").width} />
                        </ScrollView>
                    </BaseCard>
                </Content>
            </Container>
        );
    }
}
