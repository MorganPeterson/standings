import { useEffect, useState } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import {
    Table,
    Row,
    TableWrapper
} from 'react-native-table-component'
import GetMLBLinescore from '../getMLBLinescore'

interface OngoingGame_Props {
    game: MLB_Schedule_Game
}

type Linescore = Array<Array<string|number>>

interface Current_Game_Linescore {
    linescore: Linescore
    inning: number
    inningState: string
    inningOrdinal: string
}

const colHeaderText: Array<string> = ['', 'R', 'H', 'E']
const colFlexSize: Array<number> = [4, 1, 1, 1]

const generateLinescore = (game: MLB_Schedule_Game, g: MLB_Ongoing_Game): Linescore => {
    return g === undefined
        ? [[game.teams.away.team.name, 0,0,0], [game.teams.home.team.name, 0,0,0]]
        : [
            [
                game.teams.away.team.name,
                g.teams.away.runs,
                g.teams.away.hits,
                g.teams.away.errors
            ],
            [
                game.teams.home.team.name,
                g.teams.home.runs,
                g.teams.home.hits,
                g.teams.home.errors
            ]
          ]
}

export default function OngoingGame({ game }: OngoingGame_Props) {
    const [data, setData] = useState<Current_Game_Linescore>({
        linescore: [],
        inning: 1,
        inningState: 'Top',
        inningOrdinal: '1st'
    })

    useEffect(() => {
        GetMLBLinescore(game.gamePk)
        .then((g: MLB_Ongoing_Game) => {
            const linescore: Linescore = generateLinescore(game, g)
            setData({
                linescore,
                inning: g.currentInning,
                inningState: g.inningState,
                inningOrdinal: g.currentInningOrdinal
            })
        })
        return () => {
            setData({} as Current_Game_Linescore)
        }
    }, [])

    return (
        <View style={styles.view}>
            { game.status.detailedState === 'Final'
                ? <Text style={styles.inning} >
                    {`${game.status.detailedState} - ${data.inning} innings`}
                </Text>
                : <Text style={styles.inning}>
                    {`${game.status.detailedState} - ${data.inningState || 'Top'} of the ${data.inningOrdinal || '1st'}`}
                </Text>
            }
            <Table style={styles.divisionTable}>
                <Row
                    data={colHeaderText}
                    flexArr={colFlexSize}
                    textStyle={styles.headerText}
                    style={styles.headerRow}
                />
                <TableWrapper>
                    { data.linescore.map((team: Array<string|number>) => {
                        return (
                            <Row
                                data={team}
                                flexArr={colFlexSize}
                                textStyle={styles.rowText}
                                style={styles.row}
                            />)
                    })}
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
        borderStyle: 'solid',
        borderBottomColor: 'gray',
        borderBottomWidth: .2
    },
    divisionTable: {
        width: '100%',
        margin: 5
    },
    rowText: {
        fontWeight: 'bold',
        fontSize: 16,
        padding: 6,
        letterSpacing: .1,
        borderStyle: 'solid',
        borderBottomColor: 'gray',
        borderBottomWidth: .2
    },
    headerText: {
        padding: 6,
        letterSpacing: .1,
        borderStyle: 'solid',
        borderBottomColor: 'gray',
        borderBottomWidth: .2,
        fontSize: 14,
        color: 'gray'
    },
    row: {
        padding: 2
    },
    headerRow: {
        padding: 2
    }
})

