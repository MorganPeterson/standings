interface NHL_Schedule_Metadata {
    timeStamp: string
}

interface NHL_Period_Team_Stats {
    goals: number
    shotsOnGoal: number
    rinkSide: string
}

interface NHL_Shootout_Team_Stats {
    scores: number
    attempts: number
}

interface NHL_Linescore_Period {
    periodType: string
    num: number
    ordinalNum: string
    home: NHL_Period_Team_Stats
    away: NHL_Period_Team_Stats
}

interface NHL_Linescore_Shootout {
    away: NHL_Shootout_Team_Stats
    home: NHL_Shootout_Team_Stats
}

interface NHL_Linescore_Team {
    team: ID_Object
    goals: number
    shotsOnGoal: number
    goaliePulled: boolean
    numSkaters: 0
    powerPlay: boolean
}

interface NHL_Linescore_Teams {
    home: NHL_Linescore_Team
    away: NHL_Linescore_Team
}

interface NHL_Linescore_Intermission {
    intermissionTimeRemaining: number
    intermissionTimeElapsed: number
    intermission: boolean
}

interface NHL_Schedule_Linescore {
    currentPeriod: number
    currentPeriodOrdinal: string
    currentPeriodTimeRemaining: string
    periods: NHL_Linescore_Period[]
    shootoutInfo: NHL_Linescore_Shootout
    teams: NHL_Linescore_Teams
    powerPlayStrength: string
    hasShootout: false
    intermissionInfo: NHL_Linescore_Intermission
}

interface NHL_Schedule_Venue {
    id: number
    name: string
    link: string
}

interface NHL_Schedule_Content {
    link: string
}

interface NHL_Schedule_Status {
    abstractGameState: string
    codedGameState: string
    detailedState: string
    statusCode: string
    startTimeTBD: boolean
}

interface NHL_Schedule_Team {
    leagueRecord: League_Record
    score: number
    team: ID_Object
}

interface NHL_Schedule_Teams {
    away: NHL_Schedule_Team
    home: NHL_Schedule_Team
}

interface NHL_Schedule_Games {
    gamePk: number
    link: string
    gameType: string
    season: string
    gameDate: string
    status: NHL_Schedule_Status
    teams: NHL_Schedule_Teams
    linescore: NHL_Schedule_Linescore
    venue: NHL_Schedule_Venue
    content: NHL_Schedule_Content
}
interface NHL_Date {
    date: string
    totalItems: number
    totalEvents: number
    totalGames: number
    totalMatches: 0
    games: NHL_Schedule_Games[]
}

interface NHL_Schedule {
    copyright: string
    totalItems: number
    totalEvents: number
    totalGames: number
    totalMatches: number
    metaData: NHL_Schedule_Metadata
    wait: number
    dates: NHL_Date[]
}


