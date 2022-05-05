interface MLB_Schedule_Default {
    totalItems: number
    totalEvents: number
    totalGames: number
    totalGamesInProgress: number
}

interface MLB_Schedule_Game_Team {
    leagueRecord: MLB_Schedule_League_Record
    score: number
    team: ID_Type
    splitSquad: boolean
    seriesNumber: number
}

interface MLB_Schedule_Game_Teams {
    away: MLB_Schedule_Game_Team
    home: MLB_Schedule_Game_Team
}

interface MLB_Schedule_Game {
    gamePk: number
    link: string
    gameType: string
    season: string
    gameDate: string
    officialDate: string
    status: Status
    teams: MLB_Schedule_Game_Teams
    venue: ID_Type
    content: Content
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
    seriesDescription: string
    recordSource: string
    ifNecessary: string
    ifNecessaryDescription: string
}

interface MLB_Schedule_Date extends MLB_Schedule_Default {
    date: string
    games: MLB_Schedule_Game[]
    events: MLB_Schedule_Game[]
}

interface MLB_Schedule extends MLB_Schedule_Default {
    copyright: string
    dates: MLB_Schedule_Date[]
}
