interface MLB_Game_Status {
    abstractGameState: string
    codedGameState: string
    detailedState: string
    statusCode: string
    startTimeTBD: boolean
    abstractGameCode: string
}

interface MLB_Team_LeagueRecord {
    wins: number
    losses: number
    pct: string
}

interface MLB_Team_Team {
    id: number
    name: string
    link: string
}

interface MLB_Game_Team {
    leagueRecord: MLB_Team_LeagueRecord
    team: MLB_Team_Team
    splitSquad: boolean
    seriesNumber: number
}

interface MLB_Game_Teams {
    away: MLB_Game_Team
    home: MLB_Game_Team
}

interface MLB_Game_Venue {
    id: number
    name: string
    link: string
}

interface MLB_Game_Content {
    link: string
}

interface MLB_Game {
    gamePk: number
    link: string
    gameType: string
    season: string
    gameDate: string
    officialDate: string
    status: MLB_Game_Status
    teams: MLB_Game_Teams
    venue: MLB_Game_Venue
    content: MLB_Game_Content
    gameNumber: number
    publicFacing: boolean
    doubleHeader: string
    gamedayType: string
    tiebreaker: string
    calendarEventID: string
    seasonDisplay: string
    dayNight: string
    scheduledInnings: number
    reverseHomeAwayStatus: boolean
    inningBreakLength: number
    gamesInSeries: number
    seriesGameNumber: number
    seriesDescription: string
    recordSource: string
    ifNecessary: string
    ifNecessaryDescription: string
}

interface MLB_Date {
    date: string
    totalItems: number
    totalEvents: number
    totalGames: number
    totalGamesInProgress: number
    games: MLB_Game[]
}

interface MLB_Schedule {
    copyright: string
    totalItems: number
    totalEvents: number
    totalGames: number
    totalGamesInProgress: number
    dates: MLB_Date[]
}
