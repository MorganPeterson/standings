import React from 'react'
import { StyleSheet } from 'react-native'
import {
    Table,
    TableWrapper,
    Row
} from 'react-native-table-component'
import { colHeaderText, colFlexSize, teamRowData } from './constants'

export default function Division({ name, division }: any) {
    return (
        <Table key={`${name}-division`} style={styles.divisionTable}>
            <Row
                key={`${name}-header-row`}
                data={colHeaderText(name)}
                flexArr={colFlexSize()}
                textStyle={styles.text}
                style={styles.headerRow}
            />
            <TableWrapper>
                {division.map((team: Team_Records) => (
                    <Row
                        key={team.team.id}
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

