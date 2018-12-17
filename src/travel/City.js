// @flow
import * as React from "react";
import {StyleSheet, View, Dimensions, ScrollView, Share } from "react-native";
import HTMLView from 'react-native-htmlview';
import { SocialIcon } from "react-native-elements";

import {
    Container, Header, NavigationBar, Text, BaseCard, Button, Content, StyleGuide, notImplementedYet,
    type NavigationProps
} from "../components";

import type {Post} from "../components/travel/Model";

export default class CityScreen extends React.PureComponent<NavigationProps<{ post: Post }>> {
    onSocialSharePressed = () => {
        const {navigation} = this.props;
        const {post} = navigation.state.params;
        Share.share({
            message: post.URL,
            title: post.title
        },{
            dialogTitle: "Compartir Noticia"
        })
    }

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
                    <NavigationBar type="transparent" back="Noticias" {...{navigation, rightAction}} />
                </Header>
                <Content>
                    <BaseCard>
                        <ScrollView style={{ flex: 1 }}>
                            <SocialIcon 
                                type = "envelope"
                                title = "Compartir"
                                iconColor = "#3b5998"
                                iconColor = "white"
                                underlayColor = "#3b59bf"
                                style = {{backgroundColor: "#3b5998"}}
                                button
                                onPress = {() => {this.onSocialSharePressed()}}
                            />
                            <HTMLView value={post.content} />
                        </ScrollView>
                    </BaseCard>
                </Content>
            </Container>
        );
    }
}
