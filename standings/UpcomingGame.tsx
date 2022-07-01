import { View, Text, StyleSheet } from 'react-native'
import {
    Table,
    Row,
    TableWrapper
} from 'react-native-table-component'
import GameTime from './gameTime'

export default function UpcomingGame({ game }: ScheduleGame_Props) {
    const t: string = GameTime(game.gameDate)
    const teamNames: Array<{id: number, name: string}> = [{
        id: game.teams.away.team.id,
        name: game.teams.away.team.name
    },
    {
        id: game.teams.home.team.id,
        name: game.teams.home.team.name
    }]

    return (
        <View style={styles.view}>
            <Text style={styles.inning}>{t}</Text>
            <Table style={styles.divisionTable}>
                <TableWrapper>
                    {teamNames.map((team: {id: number, name: string}) => {
                        return (
                            <Row
                                key={team.id}
                                data={[team.name]}
                                textStyle={styles.rowText}
                                style={styles.row}
                            />)})}
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


