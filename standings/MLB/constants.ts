const headerColor = (id: number): object => ({
    color: 'white',
    backgroundColor: id === AL.id ? AL.color : NL.color
})

const colHeaderText = (division: string): string[] => ([
    division, 'w', 'l', 'pct', 'gb'
])

const colFlexSize = (): number[] => ([
    3, 1, 1, 1, 1
])

const teamRowData = (team: Parsed_Team): Array<string|number> => ([
    team.name,
    team.wins,
    team.losses,
    team.pct,
    team.gb
])

export {
    AL,
    NL,
    headerColor,
    colHeaderText,
    colFlexSize,
    teamRowData,
}
