import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image, Dimensions} from 'react-native';
import images from '../res/images';
import strings from '../res/strings';
import palette from '../res/palette';

const window = Dimensions.get('window');

const RecordButton = ({onPress, buttonStyle, textStyle, imageStyle}) => {
    return(
        <View style={styles.viewButton}>
            <TouchableOpacity
                style={[styles.button, buttonStyle]}
                onPress={onPress}
                accessible={true}
                accessibilityLabel={strings.recordButton}
            >
                <Image
                    source={images.recordButton}
                    style={[styles.imageButton, imageStyle]}
                    onError={() => console.warn("Failed to load record button image")}
                />
            </TouchableOpacity>
            <Text style={[styles.textButton, textStyle]}>{strings.recordButton}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    viewButton:{
        position: 'absolute',
        bottom: 'auto',
        alignSelf:'center',
        alignItems: 'center',
        borderRadius:10,
        paddingBottom: 50
    },
    button: {
        flexDirection: 'column',
        backgroundColor: 'white',
        width: window.width * 0.2,
        height: window.width * 0.22,
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius:10,
    },
    textButton:{
        textAlign: palette.text.textAlign,
        color: palette.text.color,
        fontSize: 15,
    },
    imageButton:{
        width: window.width * 0.2,
        height: window.width * 0.2, 
        resizeMode: 'contain',
    }

});


export default RecordButton;