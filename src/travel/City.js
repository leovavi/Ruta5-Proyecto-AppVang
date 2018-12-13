// @flow
import * as React from "react";
import {StyleSheet, View, Dimensions, ScrollView } from "react-native";
import HTMLView from 'react-native-htmlview';

import {
    Container, Header, NavigationBar, Text, BaseCard, Button, Content, StyleGuide, notImplementedYet,
    type NavigationProps
} from "../components";

import type {Post} from "../components/travel/Model";

export default class CityScreen extends React.PureComponent<NavigationProps<{ post: Post }>> {


    render(): React.Node {
        const {navigation, onSaveBookmark} = this.props;
        const {post} = navigation.state.params;
        const rightAction = {
            icon: "bookmark",
            onPress: onSaveBookmark
        };
        return (
            <Container>
                <Header title={post.title} picture={{
                    uri: post.featured_image,
                    preview: post.featured_image
                }}>
                    <NavigationBar type="transparent" back="Posts" {...{navigation, rightAction}} />
                </Header>
                <Content>
                    <BaseCard>
                        <ScrollView style={{ flex: 1 }}>
                            <HTMLView value={post.content} />
                        </ScrollView>
                    </BaseCard>
                </Content>
            </Container>
        );
    }
}
