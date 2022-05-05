interface NHL_Schedule_Default {
    totalItems: number
    totalEvents: number
    totalGames: number
    totalMatches: number
}

interface NHL_Schedule_League_Record {
    wins: number
    losses: number
    type: string
}

interface NHL_Schedule_Team {
    leagueRecord: NHL_Schedule_League_Record
    score: number
    team: ID_Type
}

interface NHL_Schedule_Teams {
    away: NHL_Schedule_Team
    home: NHL_Schedule_Team
}

interface NHL_Shootout_Info {
    scores: number
    attempts: number
}

interface NHL_Shootout_Info {
    away: NHL_Shootout_Score
    home: NHL_Shootout_Score
}

interface NHL_Linescore_Team {
    team: ID_Type
    goals: number
    shotsOnGoal: number
    goaliePulled: boolean
    numSkaters: number
    powerPlay: false
}

interface NHL_Linescore_Teams {
    home: NHL_Linescore_Team
    away: NHL_Linescore_Team
}

interface NHL_Linescore_Intermission {
    intermissionTimeRemaining: number
    intermissionTimeElapsed: number
    inIntermission: boolean
}

interface NHL_Linescore_Period {
    num: number
    ordinalNum: string
    away: {goals: number}
    home: {goals: number}
}

interface NHL_Schedule_Linescore {
    currentPeriod: number
    currentPeriodOrdinal: string
    currentPeriodTimeRemaining: string
    periods: NHL_Linescore_Period[]
    shootoutInfo: NHL_Shootout_Info
    teams: NHL_Linescore_Teams
    powerPlayStrength: string
    hasShootout: boolean
    intermissionInfo: NHL_Linescore_Intermission
}

interface NHL_Schedule_Game {
    gamePk: number
    link: string
    gameType: string
    season: string
    gameDate: string
    status: Status
    teams: NHL_Schedule_Teams
    linescore: NHL_Schedule_Linescore
    venue: ID_Type
    content: Content
}

interface NHL_Schedule_Date extends NHL_Schedule_Default {
    date: string
    games: NHL_Schedule_Game[]
    events: NHL_Schedule_Game[]
    matches: NHL_Schedule_Game[]
}

interface NHL_Schedule extends NHL_Schedule_Default {
    copyright: string
    metaData: NHL_Schedule_MetaData
    wait: number
    dates: NHL_Schedule_Date[]
}
