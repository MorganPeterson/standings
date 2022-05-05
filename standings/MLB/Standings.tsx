import { useEffect, useState} from 'react'
import { StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import League from '../League'
import { getMLBGames } from '../getGames'

export default function MLBStandings() {
    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<Get_League_Type>({})

    useEffect(() => {
        getMLBGames().then((d: Get_League_Type) => {
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
                        <League key={key} name={key} league={data[key]} sport='mlb' />)}
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

