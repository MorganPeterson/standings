interface MLB_Inning_Team {
    hits: number
    errors: number
    leftOnBase: number
}

interface MLB_Linescore_Inning {
    num: number
    ordinalNum: string
    home: MLB_Inning_Team
    away: MLB_Inning_Team
}

interface MLB_Teams_Team {
    runs: number
    hits: number
    errors: number
    leftOnBase: number
}

interface MLB_Linescore_Teams {
    home: MLB_Teams_Team
    away: MLB_Teams_Team
}

interface MLB_Player_Data {
    id: number
    fullName: string
    link: string
}

interface MLB_Linescore_Team {
    id: number
    name: string
    link: string
}

interface MLB_Linescore_Defense {
    pitcher: MLB_Player_Data
    catcher: MLB_Player_Data
    first: MLB_Player_Data
    second: MLB_Player_Data
    third: MLB_Player_Data
    shortstop: MLB_Player_Data
    left: MLB_Player_Data
    center: MLB_Player_Data
    right: MLB_Player_Data
    onDeck: MLB_Player_Data
    inHole: MLB_Player_Data
    battingOrder: number
    team: MLB_Linescore_Team
}

interface MLB_Linescore_Offense {
    batter: MLB_Player_Data
    onDeck: MLB_Player_Data
    inHole: MLB_Player_Data
    pitcher: MLB_Player_Data
    battingOrder: number
    team: MLB_Linescore_Team
}

interface MLB_Linescore {
    copyright: string
    currentInning: number
    currentInningOrdinal: string
    inningState: string
    inningHalf: string
    isTopInning: boolean
    scheduledInnings: number
    innings: MLB_Linescore_Inning[]
    teams: MLB_Linescore_Teams
    defense: MLB_Linescore_Defense
    offense: MLB_Linescore_Offense
    balls: number
    strikes: number
    outs: number
}
