import { SafeAreaView, Pressable, Text, StyleSheet } from 'react-native'

export default function HomeScreen({ navigation }: any) {
    return (
        <SafeAreaView style={styles.view}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('MLBHome')}>
                <Text style={styles.text}>Major League Baseball</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('NHLHome')}>
                <Text style={styles.text}>National Hockey League</Text>
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
