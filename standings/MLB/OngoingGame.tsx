import { useEffect, useState } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import {
    Table,
    Row,
    TableWrapper
} from 'react-native-table-component'
import { getMLBLinescore } from '../getMLBLinescore'

interface OngoingGame_Props {
    gamePk: number
    homeTeam: string
    awayTeam: string
    status: string
}

const colHeaderText = (): Array<string> => {
    const r: Array<string> = ['', 'R', 'H', 'E']
    return r
}

const colFlexSize = (): number[] => {
    const r: Array<number> = [4, 1, 1, 1]
    return r
}

const generateLinescore = (score: MLB_Linescore_Teams | undefined, team: string, who: string): Array<string|number> => {
    const resultArray: Array<string|number> = [team]

    if (score === undefined)
        return resultArray.concat([0,0,0])

    if (who === 'away') {
        resultArray.push(score.away.runs)
        resultArray.push(score.away.hits)
        resultArray.push(score.away.errors)
    } else {
        resultArray.push(score.home.runs)
        resultArray.push(score.home.hits)
        resultArray.push(score.home.errors)
    }
    return resultArray
}

export default function OngoingGame({ gamePk, homeTeam, awayTeam, status }: OngoingGame_Props) {
    const [data, setData] = useState<MLB_Linescore>()
    useEffect(() => {
        getMLBLinescore(gamePk).then(game => setData(game))
        return () => {
            setData(undefined)
        }
    }, [])

    return (
        <View style={styles.view}>
            { status === 'Final'
                ? <Text style={styles.inning} >{`${status} - ${data?.currentInning || '1'} innings`}</Text>
                : <Text style={styles.inning}>{`${data?.inningState || 'Top'} of the ${data?.currentInningOrdinal || '1st'}`}</Text>
            }
            <Table style={styles.divisionTable}>
                <Row
                    data={colHeaderText()}
                    flexArr={colFlexSize()}
                    textStyle={styles.headerText}
                    style={styles.headerRow}
                />
                <TableWrapper>
                    <Row
                        data={generateLinescore(data?.teams, awayTeam, 'away')}
                        flexArr={colFlexSize()}
                        textStyle={styles.rowText}
                        style={styles.row}
                    />
                    <Row
                        data={generateLinescore(data?.teams, homeTeam, 'home')}
                        flexArr={colFlexSize()}
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

