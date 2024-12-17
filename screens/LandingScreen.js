import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';

import Logo from "../components/Logo";
import AudioRecordingSengdingView from "../components/AudioRecordingSengdingView";
import ResultViewer from "../components/ResultViewer";
import colors from "../res/colors";
import images from "../res/images";
import strings from "../res/strings";


const LandingScreen = () => {
    const [recording, setRecording] = React.useState()
    const [recordings, setRecordings] = React.useState([])

    async function startRecording() {
        try {
            const permisionResponse = await Audio.requestPermissionsAsync();
            if (permisionResponse.status === "granted"){
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    playsInSilentModeIOS: true
                });
                const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
                setRecording(recording);
            }
        } catch (err){
            console.warn(err)
        }
    }
    
    async function stopRecording() {
        await recording.stopAndUnloadAsync(); 
        const uri = recording.getURI();
        console.log("stopRecording uri:", uri)
        setRecording(undefined);

        if (uri){
            console.log(encodeURIComponent(uri));
        }

        let allRecordings = [...recordings]; 
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        allRecordings.push({
            sound: sound, 
            duration: getDurationFormated(status.durationMillis),
            file: recording
        });
        setRecordings(allRecordings);
    }

    function getDurationFormated(milliseconds) {
        const minutes = milliseconds / 1000 / 60;
        const seconds = Math.round((minutes - Math.floor(minutes)) * 60);
        return seconds < 10 ? `${Math.floor(minutes)}:0${seconds}` : `${Math.floor(minutes)}:${seconds}`
    }
    
    function getRecordingsLines () {
        return recordings.map((RecordingLine, index) => {
            return (
                <View key={index} style={styles.row}>
                    <Text style={styles.fill}>
                        Recording #{index + 1} | {RecordingLine.duration}
                    </Text>
                    <Button onPress={() => RecordingLine.sound.replayAsync()} title="Play"></Button>
                </View>
            )
        })
    }
    function clearRecordings() {
        setRecordings([])
    }

    return(
        <SafeAreaView style={styles.safeViewContainer}>

            <Logo />
            <ResultViewer></ResultViewer>
            

            <AudioRecordingSengdingView                                                                                                                                                                                                                                                                                                                                                   tfgvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvm                                cccccccccccnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 b
                title={recording? strings.stopRecordText : strings.startRecordText}
                imageMicrophone={recording? images.microphoneRed : images.microphoneBlue}
                imageSend={recordings? images.sendIconGray : images.sendIconBlue}
                onRecording={recording? stopRecording : startRecording}
                view={getRecordingsLines()}
                onSending={clearRecordings}
            />

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    safeViewContainer: {
        flex : 1,
        backgroundColor: colors.mainColor,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        marginLeft: 10, 
        marginRight: 40
    }, 
    fill:{
        flex: 1, 
        margin: 15
    }

});

export default LandingScreen;