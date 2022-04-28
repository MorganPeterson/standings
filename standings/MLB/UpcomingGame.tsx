import { View, Text, StyleSheet } from 'react-native'
import {
    Table,
    Row,
    TableWrapper
} from 'react-native-table-component'

interface ScheduleGame_Props {
    game: MLB_Game
}

function formatHHMM(date: Date) {
    function z(n: number){return (n < 10 ? '0' : '') + n}
    var h = date.getHours()
    return `${h % 12}:${z(date.getMinutes())} ${(h < 12 ? 'AM' : 'PM')}`
}

export default function UpcomingGame({ game }: ScheduleGame_Props) {
    const timeRaw = new Date(game.gameDate)
    const t: string = formatHHMM(timeRaw)

    return (
        <View style={styles.view}>
            <Text style={styles.inning}>{t}</Text>
            <Table style={styles.divisionTable}>
                <TableWrapper>
                    <Row
                        data={[game.teams.away.team.name]}
                        textStyle={styles.rowText}
                        style={styles.row}
                    />
                    <Row
                        data={[game.teams.home.team.name]}
                        textStyle={styles.rowText}
                        style={styles.row}
                    />
                </TableWrapper>
            </Table>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: 10,
    },
    inning: {
        fontWeight: 'bold',
        fontSize: 16,
        padding: 6,
        letterSpacing: .1,
        borderStyle: 'solid',
        borderBottomColor: 'gray',
        borderBottomWidth: .2
    },
    divisionTable: {
        width: '100%',
        margin: 5
    },
    rowText: {
        backgroundColor: '#3b3c3d',
        letterSpacing: .1,
        fontSize: 16,
        textTransform: 'uppercase',
        padding: 2,
        fontWeight: 'bold',
    },
    row: {
        padding: 2
    }
})

