const nhlApi = 'https://statsapi.web.nhl.com/api/v1/standings'

const headerColor = (name: string): object => ({
    color: 'white',
    backgroundColor: name === 'Eastern' ? 'red' : 'blue'
})

const colHeaderText = (division: string): string[] => ([
    division, 'gp', 'win', 'loss', 'ot', 'pnts'
])

const colFlexSize = (): number[] => ([
    4, 1, 1, 1, 1, 1
])

const teamRowData = (team: Team_Records): Array<string|number> => ([
    team.team.name,
    team.gamesPlayed,
    team.leagueRecord.wins,
    team.leagueRecord.losses,
    team.leagueRecord.ot,
    team.points
])

export { nhlApi, headerColor, colHeaderText, colFlexSize, teamRowData }
