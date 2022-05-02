import {useEffect, useState} from 'react'
import { ActivityIndicator, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Conference from '../League'
import { getNHLGames } from '../getGames'

export default function NHLStandings() {
    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<any>({})

    useEffect(() => {
        getNHLGames().then((d: any) => {
            setData(d)
            setLoading(false)
        })
    }, [isLoading])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {isLoading
                    ? <ActivityIndicator />
                    : Object.keys(data).map((key: string) =>
                        <Conference key={key} name={key} league={data[key]} sport='nhl' />)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
    }
})

