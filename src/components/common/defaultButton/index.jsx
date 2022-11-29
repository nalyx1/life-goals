import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function DefaultButton({
    buttonText,
    handlePress,
    width,
    height
}) {
    return (
        <TouchableOpacity
            style={[styles.button, { width: width, height: height }]}
            activeOpacity={0.7}
            onPress={handlePress}
        >
            <Text style={styles.button_txt}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#FFF",
        borderRadius: 10,
        marginBottom: 20
    },

    button_txt: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20
    }
});
