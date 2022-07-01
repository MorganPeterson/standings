import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import {
    Table,
    Row,
    TableWrapper
} from 'react-native-table-component'

const colHeaderText = (linescore: NHL_Schedule_Linescore): string[] => {
    const periods: NHL_Linescore_Period[] = linescore.periods
    const returnArray: Array<string> = ['', '1', '2', '3']
    periods.forEach(period => {
        if (period.ordinalNum === 'OT')
            returnArray.push(period.ordinalNum)
    })

    if (linescore.hasShootout)
        returnArray.push('SO')

    returnArray.push('T')
    return returnArray
}

const colFlexSize = (len: number): number[] => {
    const returnArray: Array<number> = [4, 1, 1, 1, 1]
    for (let i = 3; i < len; i++)
        returnArray.push(1)
    return returnArray
}

const generateLinescore = (game: NHL_Schedule_Game): Array<Array<string|number>> => {
    const away: Array<string|number> = [game.teams.away.team.name]
    const home: Array<string|number> = [game.teams.home.team.name]

    game.linescore.periods.forEach((period: NHL_Linescore_Period) => {
        away.push(period.away.goals)
        home.push(period.home.goals)
    })

    for (let i = away.length; i < 4; i++) {
        away.push(0)
        home.push(0)
    }

    if (game.linescore.hasShootout) {
        away.push(game.linescore.shootoutInfo.away.scores)
        home.push(game.linescore.shootoutInfo.home.scores)
    }

    away.push(game.teams.away.score)
    home.push(game.teams.home.score)

    return [away, home]
}

export default function OngoingGame({ game }: NHL_OngoingGame_Props) {
    const linescore: Array<Array<string|number>> = generateLinescore(game)
    const timeRemaining: string = game.linescore.currentPeriodTimeRemaining
    const period: string = game.linescore.currentPeriodOrdinal
    const flexSize: number = game.linescore.periods.length

    return (
        <View style={styles.view}>
            { game.linescore.currentPeriodTimeRemaining === 'Final'
                ? <Text style={styles.period}>{`${timeRemaining}`}</Text>
                : <Text style={styles.period}>{`${timeRemaining} ${period}`}</Text>
            }
            <Table style={styles.divisionTable}>
                <Row
                    data={colHeaderText(game.linescore)}
                    flexArr={colFlexSize(flexSize)}
                    textStyle={styles.headerText}
                    style={styles.headerRow}
                />
                <TableWrapper>
                    {linescore.map((score: Array<string|number>) => {
                        return (
                            <Row
                                data={score}
                                flexArr={colFlexSize(flexSize)}
                                textStyle={styles.rowText}
                                style={styles.headerRow}
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
    period: {
        fontWeight: 'bold',
        fontSize: 14,
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
        fontSize: 12,
        padding: 6,
        letterSpacing: .1,
    },
    headerText: {
        padding: 6,
        letterSpacing: .1,
        borderStyle: 'solid',
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

