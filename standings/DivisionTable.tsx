import React from 'react'
import { StyleSheet } from 'react-native'
import {
    Table,
    TableWrapper,
    Row
} from 'react-native-table-component'

export default function DivisionTable({ division }: DivTableProps) {
    return (
        <Table style={styles.divisionTable}>
            <Row
                data={[division.division, 'win', 'loss', 'pct', 'gb']}
                flexArr={[3, 1, 1, 1, 1]}
                textStyle={styles.text}
                style={styles.headerRow}
            />
            <TableWrapper>
                {division.records.map((team: Parsed_Team) => (
                    <Row
                        key={team.id}
                        data={[
                            team.name,
                            team.wins,
                            team.losses,
                            team.pct,
                            team.gb
                        ]}
                        flexArr={[3, 1, 1, 1, 1]}
                        textStyle={styles.text}
                    />))}
            </TableWrapper>
        </Table>
    )
}

const styles = StyleSheet.create({
    divisionTable: {
        width: '100%',
        marginBottom: 20
    },
    text: {
        margin: 1
    },
    headerRow: {
        borderBottomWidth: 1
    }
})

