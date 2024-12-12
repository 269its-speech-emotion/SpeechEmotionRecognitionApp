import React from "react";
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import images from "../res/images";

const window = Dimensions.get('window');

const Logo = ({style}) => {
    return(
        <View style={[styles.logoContainer, style]}>
            <Image
                source={images.logo}
                style={styles.image}
                onError={() => console.warn("Failed to load logo")}
                accessible={true}
                accessibilityLabel="Speech Emotion Recognition App"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        alignSelf: 'center',
    },
    image:{
        width: window.width * 0.25,
        height: window.height * 0.1,
        resizeMode: 'contain'
    }
})


export default Logo;