import { SafeAreaView, Pressable, Text, StyleSheet } from 'react-native'

export default function HomeScreen({ navigation }: any) {
    return (
        <SafeAreaView style={styles.view}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('MLBStandings')}>
                <Text style={styles.text}>MLB Standings</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('MLBSchedule')}>
                <Text style={styles.text}>MLB Schedule</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: '100%',
        alignItems: 'baseline',
        margin: 5
    },
    button: {
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 5
    },
    text: {
        margin: 5,
        fontSize: 23
    }
})

