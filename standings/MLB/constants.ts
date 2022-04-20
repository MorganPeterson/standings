const mlbApi = 'https://statsapi.mlb.com/api/v1/standings'
const apiArgs = '?leagueId='

const AL: LeagueDetails = {
    id: 103,
    title: 'American League',
    color: 'red'
}

const NL: LeagueDetails = {
    id: 104,
    title: 'National League',
    color: 'blue'
}

const headerColor = (id: number): object => ({
    color: 'white',
    backgroundColor: id === AL.id ? AL.color : NL.color
})

const colHeaderText = (division: string): string[] => ([
    division, 'win', 'loss', 'pct', 'gb'
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
    mlbApi,
    apiArgs
}
