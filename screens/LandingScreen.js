import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import Logo from "../components/Logo";
import RecordButton from "../components/RecordButton";
import ResultViewer from "../components/ResultViewer";
import colors from "../res/colors";

const LandingScreen = () => {
    return(
        <SafeAreaView style={styles.safeViewContainer}>
            <Logo />
            
            <ResultViewer>

            </ResultViewer>
            
            <RecordButton>

            </RecordButton>

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

});

export default LandingScreen;