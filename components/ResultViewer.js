import React from "react";
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import palette from "../res/palette";

const window = Dimensions.get('window');


const ResultViewer = ({title = "Result", description = "The result of the emotion type will appear in this area.", style}) => {
    return(
        <View style={[styles.viewResultContainer, style]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewResultContainer: {
        position: 'absolute',
        top: '20%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    title:{
        fontSize: palette.heading.fontsize,
        fontWeight: 'bold', 
        color: palette.heading.color,
    },
    description: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        width: window.width * 0.8,
        height: window.height * 0.45,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ResultViewer;
