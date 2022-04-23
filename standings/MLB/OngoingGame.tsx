import { useEffect, useState } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import {
    Table,
    Row,
    TableWrapper
} from 'react-native-table-component'
import { getLinescore } from './getSchedule'

interface OngoingGame_Props {
    gamePk: number
    homeTeam: string
    awayTeam: string
    status: string
}

const colHeaderText = (): Array<string> => {
    const r: Array<string> = ['Team', 'R', 'H', 'E']
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
        getLinescore(gamePk).then(game => setData(game))
        return () => {
            setData(undefined)
        }
    }, [])

    return (
        <View style={styles.view}>
            <Table style={styles.divisionTable}>
                <Row
                    data={colHeaderText()}
                    flexArr={colFlexSize()}
                    textStyle={styles.text}
                    style={styles.headerRow}
                />
                <TableWrapper>
                    <Row
                        data={generateLinescore(data?.teams, awayTeam, 'away')}
                        flexArr={colFlexSize()}
                        textStyle={styles.text}
                        style={styles.headerRow}
                    />
                    <Row
                        data={generateLinescore(data?.teams, homeTeam, 'home')}
                        flexArr={colFlexSize()}
                        textStyle={styles.text}
                        style={styles.headerRow}
                    />
                </TableWrapper>
            </Table>
            { status === 'Final'
                ? <Text>{`${status} - ${data?.currentInning || '1'} innings`}</Text>
                : <Text>{`${data?.inningState || 'Top'} of the ${data?.currentInningOrdinal || '1st'}`}</Text>
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

