import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import League from './League'
import { AL, NL } from './constants'

export default function MLBStandings() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <League
                    key={ AL.id }
                    leagueId={ AL.id }
                    leagueName={ AL.title }
                />
                <League
                    key={ NL.id }
                    leagueId={ NL.id }
                    leagueName={ NL.title }
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

