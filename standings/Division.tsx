import React from 'react'
import { StyleSheet } from 'react-native'
import {
    Table,
    TableWrapper,
    Row
} from 'react-native-table-component'
import { colHeaderText, colFlexSize, teamRowData } from './constants'


// export default function Division({ name, division }: any) {
export default function Division({ name, sport, division }: Division_Table_Props_Type) {
    return (
        <Table key={division.divId} style={styles.divisionTable}>
            <Row
                key={`${name}-header-row`}
                data={colHeaderText(name, sport)}
                flexArr={colFlexSize(sport)}
                textStyle={styles.text}
                style={styles.headerRow}
            />
            <TableWrapper>
                {division.map((team: any) => (
                    <Row
                        key={team.id}
                        data={teamRowData(team, sport)}
                        flexArr={colFlexSize(sport)}
                        textStyle={styles.text}
                        style={styles.teamRow}
                    />))}
            </TableWrapper>
        </Table>
    )
}

const styles = StyleSheet.create({
    divisionTable: {
        width: '100%',
        textAlign: 'left',
    },
    text: {
        backgroundColor: '#3b3c3d',
        letterSpacing: .1,
        fontSize: 10,
        textTransform: 'uppercase',
        padding: 12
    },
    headerRow: {
        backgroundColor: '#dbdcdd'
    },
    teamRow: {
        borderStyle: 'solid',
        borderBottomColor: 'gray',
        borderBottomWidth: .2
    }
})

