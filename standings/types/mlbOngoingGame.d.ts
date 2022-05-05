interface MLB_Ongoing_Team {
    runs: number
    hits: number
    errors: number
    leftOnBase: number
}

interface MLB_Ongoing_Inning {
    num: number
    ordinalNum: string
    home: MLB_Ongoing_Team
    away: MLB_Ongoing_Team
}

interface MLB_Ongoing_Teams {
    home: MLB_Ongoing_Team
    away: MLB_Ongoing_Team
}

interface MLB_Ongoing_Player {
    id: number
    fullName: string
    link: string
}

interface MLB_Ongoing_Offense {
    batter: MLB_Ongoing_Player
    onDeck: MLB_Ongoing_Player
    inHole: MLB_Ongoing_Player
    battingOrder: number
    team: ID_Type
    pitcher: MLB_Ongoing_Player
}

interface MLB_Ongoing_Defense extends MLB_Ongoing_Offense {
    catcher: MLB_Ongoing_Player
    first: MLB_Ongoing_Player
    second: MLB_Ongoing_Player
    third: MLB_Ongoing_Player
    shortstop: MLB_Ongoing_Player
    left: MLB_Ongoing_Player
    center: MLB_Ongoing_Player
    right: MLB_Ongoing_Player
}

interface MLB_Ongoing_Game {
    copyright: string
    currentInning: number
    currentInningOrdinal: string
    inningState: string
    inningHalf: string
    isTopInning: boolean
    scheduledInnings: number
    innings: MLB_Ongoing_Inning[]
    teams: MLB_Ongoing_Teams
    defense: MLB_Ongoing_Defense
    offense: MLB_Ongoing_Offense
    balls: number
    strikes: number
    outs: number
}
