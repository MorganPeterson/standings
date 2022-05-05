import {useEffect, useState} from 'react'
import { ActivityIndicator, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Conference from '../League'
import { getNHLGames } from '../getGames'

export default function NHLStandings() {
    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<Get_Standings_Type>({} as Get_Standings_Type)

    useEffect(() => {
        getNHLGames().then((d: Get_Standings_Type) => {
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

