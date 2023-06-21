import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button";

const reviewSchema = yup.object({
    title: yup.string()
    .required()
    .min(4),
    body: yup.string()
    .required()
    .min(8),
    rating: yup.string()
    .required()
    .test("is-num-1-5", "Rating must be a number from 1 to 5", (val) => (parseInt(val) < 6 && parseInt(val) > 0)),
});

export default function ReviewForm({ submitHandler }) {
    return(
        <View style={globalStyles.container}>
            <Formik 
            initialValues={{ title: "", body: "", rating: "" }}
            validationSchema={reviewSchema}
            onSubmit={(values) => {
                submitHandler(values);
            }}
            >
                {(props) => (
                    <View>
                        <TextInput
                        style={globalStyles.input}
                        placeholder="Review Title"
                        onChangeText={props.handleChange("title")}
                        value={props.values.title}
                        onBlur={props.handleBlur("title")}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title }</Text>

                        <TextInput
                        multiline
                        style={globalStyles.input}
                        placeholder="Review Body"
                        onChangeText={props.handleChange("body")}
                        value={props.values.body}
                        onBlur={props.handleBlur("body")}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.body && props.errors.body }</Text>

                        <TextInput
                        style={globalStyles.input}
                        placeholder="Rating (1-5)"
                        onChangeText={props.handleChange("rating")}
                        value={props.values.rating}
                        keyboardType="numeric"
                        onBlur={props.handleBlur("rating")}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.rating && props.errors.rating }</Text>

                        <FlatButton text="Submit" onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    );
}