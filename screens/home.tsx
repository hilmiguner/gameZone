import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Card from "../shared/card";
import { globalStyles } from "../styles/global";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }:{ navigation: any}) {
    const insets = useSafeAreaInsets();
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: "Zelda, Breath of Fresh Air", rating: 5, body: "lorem ipsum", key: "1"},
        { title: "Gotta Catch Them All (again)", rating: 4, body: "lorem ipsum", key: "2"},
        { title: "Not So Final Fantasy", rating: 3, body: "lorem ipsum", key: "3"},
    ]);

    const modalAddReview = (newReview:any) => {
        setReviews((currentReviews) => ([
            newReview,
            ...currentReviews,
        ]));
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{
                        ...styles.modalContent,
                        marginTop: insets.top + 5,
                        }}>
                        <MaterialIcons 
                        name="close" 
                        size={24} 
                        style={{
                            ...styles.modalToggle,
                            ...styles.modalClose,
                        }}
                        onPress={() => setModalOpen(false)}
                        />
                        {/* <Text>Hello from modal</Text> */}
                        <ReviewForm submitHandler={modalAddReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons 
            name="add" 
            size={24} 
            style={styles.modalToggle}
            onPress={() => setModalOpen(true)}
            />
            <FlatList 
            data={reviews}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("details", item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    },
});