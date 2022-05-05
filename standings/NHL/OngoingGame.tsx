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

const generateLinescore = (game: NHL_Schedule_Game, who: string): Array<string|number> => {
    const resultArray: Array<string|number> = []
    if (who === 'away') {
        resultArray.push(game.teams.away.team.name)
        game.linescore.periods.forEach(period => resultArray.push(period.away.goals))
        for (let i = resultArray.length; i < 4; i++) {
            resultArray.push(0)
        }
        if (game.linescore.hasShootout)
            resultArray.push(game.linescore.shootoutInfo.away.scores)
        resultArray.push(game.teams.away.score)
    }
    if (who === 'home') {
        resultArray.push(game.teams.home.team.name)
        game.linescore.periods.forEach(period => resultArray.push(period.home.goals))
        for (let i = resultArray.length; i < 4; i++) {
            resultArray.push(0)
        }
        if (game.linescore.hasShootout)
            resultArray.push(game.linescore.shootoutInfo.home.scores)
        resultArray.push(game.teams.home.score)
    }

    return resultArray
}

export default function OngoingGame({ game }: NHL_OngoingGame_Props) {
    return (
        <View style={styles.view}>
            { game.linescore.currentPeriodTimeRemaining === 'Final'
                ? <Text style={styles.period}>{`${game.linescore.currentPeriodTimeRemaining}`}</Text>
                : <Text style={styles.period}>{`${game.linescore.currentPeriodTimeRemaining} ${game.linescore.currentPeriodOrdinal}`}</Text>
            }
            <Table style={styles.divisionTable}>
                <Row
                    data={colHeaderText(game.linescore)}
                    flexArr={colFlexSize(game.linescore.periods.length)}
                    textStyle={styles.headerText}
                    style={styles.headerRow}
                />
                <TableWrapper>
                    <Row
                        data={generateLinescore(game, 'away')}
                        flexArr={colFlexSize(game.linescore.periods.length)}
                        textStyle={styles.rowText}
                        style={styles.headerRow}
                    />
                    <Row
                        data={generateLinescore(game, 'home')}
                        flexArr={colFlexSize(game.linescore.periods.length)}
                        textStyle={styles.rowText}
                        style={styles.headerRow}
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

