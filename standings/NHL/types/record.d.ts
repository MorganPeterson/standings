interface ID_Object {
    id: number
    name: string
    link: string
}

interface Division {
    id: number
    name: string
    nameShort: string
    link: string
    abbreviation: string
}

interface League_Record {
    wins: number
    losses: number
    ot: number
    type: string
}

interface Streak {
    streakType: string
    streakNumber: number
    streakCode: string
}

interface Team_Records {
    team: ID_Object
    leagueRecord: League_Record
    regulationWins: number
    goalsAgainst: number
    goalsScored: number
    points: number
    divisionRank: string
    divisionL10Rank: string
    divisionRoadRank: string
    divisionHomeRank: string
    conferenceRank: string
    conferenceL10Rank: string
    conferenceRoadRank: string
    conferenceHomeRank: string
    leagueRank: string
    leagueL10Rank: string
    leagueRoadRank: string
    leagueHomeRank: string
    wildCardRank: string
    row: number
    gamesPlayed: number
    streak: Streak
    clinchIndicator: string
    pointsPercentage: number
    ppDivisionRank: string
    ppConferenceRank: string
    ppLeagueRank: string
    lastUpdated: string
}

interface Standings {
    standingsType: string
    league: ID_Object
    division: Division
    conference: ID_Object
    teamRecords: Team_Records[]
}

interface Records {
    copyright: string
    records: Standings[]
}

interface NHL_Standings {
    copyright: string
    eastern: Standings[]
    western: Standings[]
}

interface Conference_Props {
    conference: Standings[]
}

