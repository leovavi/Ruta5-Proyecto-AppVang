// @flow
import * as React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

import {
    ActionSheet, Container, DetailsBar, Header, NavigationBar, Button, Content, StyleGuide, DatePicker,
    QuantityInput, PayButton, type NavigationProps
} from "../components";

import type {Guide} from "../components/travel/Model";

const about = "Ruta5 se creó en el año 2014 con el propósito de exaltar el rol de los hondureños exitosos dentro o fuera de Honduras, a través de artículos que se publican semanalmente en nuestro sitio web http://www.rutacincohn.com. Abordamos también temas de turismo, gastronomía catracha, cultura, empresas de éxito, extranjeros en Honduras, centroamericanos exitosos y otros temas de interés mundial.\n\n"+
    "Nuestra misión es promover el desarrollo y el crecimiento económico, conectar a  los hondureños en el mundo, promocionar su empresa y posicionar las noticias positivas de Honduras ante el ojo crítico mundial.\n\n"+
    "Puede compartirnos su historia de éxito al email rutacincohn@gmail.com o interactúe con nosotros a través de nuestras redes sociales: instagram y twitter, facebook youtube o Linkedin."

export default class About extends React.PureComponent<NavigationProps<{about: Guide}>>{
    render() : React.Node{
        return(
            <Container>
                <Image
                    source = {require("../../logo.png")}
                />
                <Content style={styles.content}>
                    <Text style={styles.body}>
                        {about}
                    </Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        fontSize: 18,
        textAlign: "justify",
        marginRight: "3%",
        marginLeft: "3%",
        marginTop: "3%",
        lineHeight: 30,
        marginBottom: StyleGuide.spacing.tiny
    },
    content: {
        paddingBottom: StyleGuide.spacing.small
    },
    image: {
        flex: 1,
        width: window.width-10,
        height: 50,
        alignSelf: "center"
    }
});