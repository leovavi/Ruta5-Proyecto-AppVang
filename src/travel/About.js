// @flow
import * as React from "react";
import {View, StyleSheet, Animated, Text, Image, AnimatedFlatList, ScrollView, Linking } from "react-native";
import { SocialIcon } from "react-native-elements";


import {
    ActionSheet, Container, DetailsBar, Header, NavigationBar, Button, Content, StyleGuide, DatePicker,
    QuantityInput, PayButton, type NavigationProps, type StyleProps, type ThemeProps, BaseCard
} from "../components";

import type {About} from "../components/travel/Model";

const about = {};

about.id = "Sobre Nosotros";
about.info = "Ruta5 se creó en el año 2014 con el propósito de exaltar el rol de los hondureños exitosos dentro o fuera de Honduras, a través de artículos que se publican semanalmente en nuestro sitio web http://www.rutacincohn.com. Abordamos también temas de turismo, gastronomía catracha, cultura, empresas de éxito, extranjeros en Honduras, centroamericanos exitosos y otros temas de interés mundial.\n\n"+
    "Nuestra misión es promover el desarrollo y el crecimiento económico, conectar a  los hondureños en el mundo, promocionar su empresa y posicionar las noticias positivas de Honduras ante el ojo crítico mundial.\n\n"+
    "Puede compartirnos su historia de éxito al email rutacincohn@gmail.com o interactúe con nosotros a través de nuestras redes sociales: instagram y twitter, facebook youtube o Linkedin."
about.picture = {
    uri: "https://imgur.com/9RaGNDP.png",
    preview: "https://imgur.com/9RaGNDP.png"
}

export default class AboutClass extends React.PureComponent<NavigationProps<{about: About}>>{
    onButtonPressed = (url) =>{ Linking.openURL(url); }

    render() : React.Node {
        const fbURL = "https://www.facebook.com/n/?RutaCincoHn";
        const ytURL = "https://www.youtube.com/channel/UCk_-JJq-7Pv7W-IfqiyWnvg?view_as=subscriber";
        const twURL = "https://twitter.com/ruta5hn";
        const igURL = "http://www.instagram.com/ruta5hn";
        const liURL = "https://www.linkedin.com/in/ruta5hn/";
        return(
            <Container>
                <Header picture={about.picture} heightRatio={0.5} title ={about.id}>
                    <View style={styles.container}>
                        <Text color="black" type="title3" style={styles.text}>{}</Text>
                        <Text color="black" type="callout" style={styles.text}>{}</Text>
                    </View>
                </Header>
                <Content style={styles.content}>
                    <BaseCard>
                        <ScrollView style={{ flex: 1 }}>
                            <Text>{about.info}</Text>
                            <View style={{flexDirection:"row"}}>
                                <SocialIcon 
                                    type = "facebook"
                                    style={{ flex: 2 }}
                                    button
                                    onPress = {() => {this.onButtonPressed(fbURL)}}
                                />
                                <SocialIcon 
                                    type = "twitter"
                                    style={{ flex: 2 }}
                                    button
                                    onPress = {() => {this.onButtonPressed(twURL)}}
                                />
                                <SocialIcon 
                                    type = "instagram"
                                    style={{ flex: 2 }}
                                    button
                                    onPress = {() => {this.onButtonPressed(igURL)}}
                                />
                                <SocialIcon 
                                    type = "youtube"
                                    style={{ flex: 2 }}
                                    button
                                    onPress = {() => {this.onButtonPressed(ytURL)}}
                                />
                                <SocialIcon 
                                    type = "linkedin"
                                    style={{ flex: 2 }}
                                    button
                                    onPress = {() => {this.onButtonPressed(liURL)}}
                                />
                            </View>
                        </ScrollView>
                    </BaseCard>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: StyleGuide.spacing.small,
        flex: 1,
        justifyContent: "center"
    },
    text: {
        textAlign: "center",
        marginBottom: StyleGuide.spacing.tiny
    },
    content: {
        paddingBottom: StyleGuide.spacing.small
    },
});