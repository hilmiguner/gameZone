import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header({ navigation, title }) {
    const insets = useSafeAreaInsets();

    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <ImageBackground source={require("../assets/game_bg.png")} style={styles.header}>
            <View style={{
                paddingTop: insets.top,
                flexDirection: "row",
                flex: 1,
                justifyContent: "center",
            }}>
                <MaterialIcons name="menu" size={28} onPress={openMenu} style={{
                    position: "absolute",
                    left: 16,
                    top: insets.top,
                }}/>
                <View style={{flexDirection: "row"}}>
                    <Image source={require("../assets/heart_logo.png")} style={styles.headerImage}/>
                    <Text style={styles.headerText}>{title}</Text>
                </View>  
            </View>
        </ImageBackground>
    );
}

//const insets = useSafeAreaInsets();

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
    },
    icon: {
        position: "absolute",
        left: 16,
    },
    headerImage: {
        width: 26,
        height: 26,
        marginRight: 15,
    },
});