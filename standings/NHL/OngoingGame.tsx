import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import {
    Table,
    Row,
    TableWrapper
} from 'react-native-table-component'

interface OngoingGame_Props {
    game: NHL_Schedule_Games
}

const colHeaderText = (periods: NHL_Linescore_Period[]): string[] => {
    const returnArray: Array<string> = ['Team', '1', '2', '3']
    periods.forEach(period => {
        console.log(period.ordinalNum)
        if (period.ordinalNum === 'OT' || period.ordinalNum === 'SO')
            returnArray.push(period.ordinalNum)
    })
    returnArray.push('T')
    return returnArray
}

const colFlexSize = (len: number): number[] => {
    const returnArray: Array<number> = [4, 1, 1, 1, 1]
    for (let i = 3; i < len; i++)
        returnArray.push(1)
    return returnArray
}

const generateLinescore = (game: NHL_Schedule_Games, who: string): Array<string|number> => {
    const resultArray: Array<string|number> = []
    if (who === 'away') {
        resultArray.push(game.teams.away.team.name)
        game.linescore.periods.forEach(period => resultArray.push(period.away.goals))
        for (let i = resultArray.length; i < 4; i++) {
            resultArray.push(0)
        }
        resultArray.push(game.teams.away.score)
    }
    if (who === 'home') {
        resultArray.push(game.teams.home.team.name)
        game.linescore.periods.forEach(period => resultArray.push(period.home.goals))
        for (let i = resultArray.length; i < 4; i++) {
            resultArray.push(0)
        }
        resultArray.push(game.teams.home.score)
    }

    return resultArray
}

export default function OngoingGame({ game }: OngoingGame_Props) {
    return (
        <View style={styles.view}>
            <Table style={styles.divisionTable}>
                <Row
                    data={colHeaderText(game.linescore.periods)}
                    flexArr={colFlexSize(game.linescore.periods.length)}
                    textStyle={styles.text}
                    style={styles.headerRow}
                />
                <TableWrapper>
                    <Row
                        data={generateLinescore(game, 'away')}
                        flexArr={colFlexSize(game.linescore.periods.length)}
                        textStyle={styles.text}
                        style={styles.headerRow}
                    />
                    <Row
                        data={generateLinescore(game, 'home')}
                        flexArr={colFlexSize(game.linescore.periods.length)}
                        textStyle={styles.text}
                        style={styles.headerRow}
                    />
                </TableWrapper>
            </Table>
            { game.linescore.currentPeriodTimeRemaining === 'Final'
                ? <Text>{`${game.linescore.currentPeriodTimeRemaining}`}</Text>
                : <Text>{`${game.linescore.currentPeriodTimeRemaining} ${game.linescore.currentPeriodOrdinal}`}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        marginBottom: 20
    },
    divisionTable: {
        width: '100%',
    },
    text: {
        margin: 1
    },
    headerRow: {
        borderBottomWidth: 1
    }
})


