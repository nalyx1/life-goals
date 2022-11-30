import { StyleSheet, View, Text, ScrollView } from "react-native";
import DefaultButton from "../../components/common/defaultButton/index";
import Card from "../../components/explanation/card";

export default function AppExplanation() {
    const handleSetShowHome = () => {
        console.log("Indo pra proxima tela");
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.title}>
                        Antes, deixa {"\n"} eu te explicar...
                    </Text>
                    <Card />
                    <Text style={styles.descriptionCta}>
                        Preparado para subir de nível na vida?
                    </Text>
                    <Text style={styles.description}>
                        Na próxima tela, você vai poder escolher {"\n"} seus 4
                        hábitos de forma individual.
                    </Text>
                    <DefaultButton
                        buttonText={"Continuar"}
                        handlePress={handleSetShowHome}
                        width={250}
                        height={50}
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
    title: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#FFF",
        textAlign: "center",
        marginVertical: 40
    },
    descriptionCta: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10
    },
    description: {
        color: "#FFF",
        textAlign: "center",
        marginBottom: 30
    }
});
