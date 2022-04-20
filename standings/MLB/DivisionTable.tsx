import React from 'react'
import { StyleSheet } from 'react-native'
import {
    Table,
    TableWrapper,
    Row
} from 'react-native-table-component'
import { colHeaderText, colFlexSize, teamRowData } from './constants'

export default function DivisionTable({ division }: DivTableProps) {
    return (
        <Table key={division.divId} style={styles.divisionTable}>
            <Row
                key={`${division.divId}-header`}
                data={colHeaderText(division.division)}
                flexArr={colFlexSize()}
                textStyle={styles.text}
                style={styles.headerRow}
            />
            <TableWrapper>
                {division.records.map((team: Parsed_Team) => (
                    <Row
                        key={team.id}
                        data={teamRowData(team)}
                        flexArr={colFlexSize()}
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

