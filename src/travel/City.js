// @flow
import * as React from "react";
import {StyleSheet, View} from "react-native";

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
                    <NavigationBar type="transparent" back="Cities" {...{navigation, rightAction}} />
                </Header>
                <Content>
                    <BaseCard>
                        <Text>{post.content}</Text>
                    </BaseCard>
                </Content>
            </Container>
        );
    }
}
