import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image, Dimensions} from 'react-native';

import palette from '../res/palette';
import images from '../res/images';

const window = Dimensions.get('window');

const AudioRecordingSengdingView = ({title, imageMicrophone, imageSend, view, onRecording, onSending}) => {
    return(
        <View style={styles.viewContainer}>
            { /* Recording part */ }
            <View style={styles.viewRecording}>
                <TouchableOpacity
                    onPress={onRecording}
                    accessible={true}
                >
                    <Image
                        source={imageMicrophone}
                        style={styles.imageMicrophone}
                        onError={() => console.warn("Failed to load record button image")}
                    />
                </TouchableOpacity>
            </View>

            { /* AudioHolder part*/ }
            <View style={styles.viewAudioHolder}>
                {view}
            </View>

            { /* Sending part */ }
            <View style={styles.viewSending}>
                <TouchableOpacity
                    //style={styles.button}
                    onPress={onSending}
                    accessible={true}
                >
                    <Image
                        source={imageSend}
                        style={styles.imageSendIcon}
                        onError={() => console.warn("Failed to load record button image")}
                    />
                </TouchableOpacity>
            </View>
            
        </View>
    );
};


const styles = StyleSheet.create({
    viewContainer:{
        position: 'absolute',
        bottom: 'auto',
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    viewRecording:{
        justifyContent: 'center', // Aligns content vertically
        alignItems: 'flex-start', // Aligns content horizontally
        width: window.width * 0.22,
        height: window.width * 0.22,
        borderRadius:10,
    },
    viewAudioHolder:{
        justifyContent: 'center', // Aligns content vertically
        alignItems: 'center', // Aligns content horizontally
        backgroundColor: 'brown',
        width: window.width * 0.5,
        height: window.width * 0.22,
        borderRadius:10,
    },
    viewSending:{
        justifyContent: 'center', // Aligns content vertically
        alignItems: 'flex-end', // Aligns content horizontally
        backgroundColor: 'pink',
        width: window.width * 0.12,
        height: window.width * 0.12,
        borderRadius:10,
        marginHorizontal: 10
    },
    imageMicrophone:{
        width: window.width * 0.2,
        height: window.width * 0.2, 
        resizeMode: 'contain',
    },
    imageSendIcon:{
        width: window.width * 0.1,
        height: window.width * 0.1, 
        resizeMode: 'contain',
    }
});


export default AudioRecordingSengdingView;