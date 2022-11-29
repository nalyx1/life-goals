import { View, StyleSheet } from "react-native";
import Lottie from "lottie-react-native";

export default function LifeStatus() {
    return (
        <View style={styles.container}>
            <Lottie
                source={require("../../../assets/education/education-100.json")}
                autoPlay={true}
                loop={true}
                style={styles.education_animation}
            />

            <Lottie
                source={require("../../../assets/money/money-100.json")}
                autoPlay={true}
                loop={true}
                style={styles.money_animation}
            />

            <Lottie
                source={require("../../../assets/robot/robot-100-100.json")}
                autoPlay={true}
                loop={true}
                style={styles.robot_animation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300
    },

    education_animation: {
        width: 100,
        marginTop: 50,
        marginLeft: 5,
        position: "absolute"
    },

    money_animation: {
        width: 100,
        marginTop: 50,
        marginLeft: 95,
        position: "absolute"
    },

    robot_animation: {
        width: 190,
        marginTop: 30,
        marginLeft: 25
    }
});
