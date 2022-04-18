import { View, Pressable, Text, StyleSheet } from 'react-native'

export default function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.view}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('MLBStandings')}>
                <Text style={styles.text} >MLB Standings</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'baseline',
        margin: 5
    },
    button: {
        width: '100%',
        backgroundColor: 'white'
    },
    text: {
        margin: 5,
        fontSize: 23
    }
})
