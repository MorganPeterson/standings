import { useEffect } from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import League from './League'
import * as SQLite from 'expo-sqlite'
import {
    openDatabase,
    createStandingsTable
} from './database'

export default function App() {
    useEffect(() => {
        openDatabase().then((db: SQLite.WebSQLDatabase) => {
            createStandingsTable(db)
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <League
                    leagueId={103}
                    leagueName='American League'
                />
                <League
                    leagueId={104}
                    leagueName='National League'
                />
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

