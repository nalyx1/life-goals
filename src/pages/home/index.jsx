import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LifeStatus from "../../components/common/lifeStatus";
import DefaultButton from "../../components/common/defaultButton";

export default function Home() {
    const navigation = useNavigation();

    const handleNavExplanation = () => {
        navigation.navigate("AppExplanation");
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.daily_checks}>20 dias - 80 checks</Text>
                    <LifeStatus />
                    <DefaultButton
                        handlePress={handleNavExplanation}
                        buttonText={"Ver explicação novamente"}
                        height={50}
                        width={250}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21,21,21, 0.98)"
    },
    daily_checks: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        marginTop: 40
    },
    explanation_text: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25
    }
});
