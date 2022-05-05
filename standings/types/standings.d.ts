interface ID_Type {
    id: number
    name: string
    link: string
}

interface League_Record_Type {
    wins: number
    losses: number
}

interface Streak_Type {
    streakType: string
    streakNumber: number
    steakCode: string
}

interface Team_Records_Type {
    team: ID_Type
    streak: Streak_Type
    divisionRank: string
    leagueRank: string
    wildCardRank: string
    gamesPlayed: number
    lastUpdated: string
}

interface Record_Type {
    standingsType: string
    league: League_Type
}

interface Standings_Type {
    copyright: string
}

interface Status {
    abstractGameState: string
    codedGameState: string
    detailedState: string
    statusCode: string
    startTimeTBD: boolean
    abstractGameCode: string
}

interface Content {
    link: string
}

