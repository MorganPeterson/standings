import React from 'react'
import {
    SafeAreaView,
    Pressable,
    Text,
    StyleSheet
} from 'react-native'

export default React.memo(function HomeScreen({ navigation, navDetails }: any) {
    return (
        <SafeAreaView style={styles.view}>
            { navDetails.map((detail: any) =>
                <Pressable
                    key={detail.key}
                    style={styles.button}
                    onPress={() => navigation.navigate(detail.component)}>
                    <Text style={styles.text}>{detail.title}</Text>
                </Pressable>)}
        </SafeAreaView>
    )
})

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
