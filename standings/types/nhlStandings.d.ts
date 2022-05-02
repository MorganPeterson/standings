interface NHL_Standings_Type extends Standings_Type {
    records: NHL_Record_Type[]
}

interface NHL_Record_Type extends Record_Type {
    division: NHL_Division_Type
    conference: ID_Type
    teamRecords: NHL_Team_Records_Type[]
}

interface NHL_Team_Records_Type extends Team_Records_Type {
    regulationWins: number
    goalsAgainst: number
    goalsScored: number
    points: number
    divisionL10Rank: string
    divisionRoadRank: string
    divisionHomeRank: string
    conferenceRank: string
    conferenceL10Rank: string
    conferenceRoadRank: string
    conferenceHomeRank: string
    leagueRank: string
    LeagueL10Rank: string
    leagueRoadRank: string
    leagueHomeRank: string
    row: number
    clinchIndicator: string
    pointsPercentage: number
    ppDivisionRank: string
    ppConferenceRank: string
    ppLeagueRank: string
    leagueRecord: NHL_League_Record_Type
}

interface NHL_Division_Type extends ID_Type {
    nameShort: string
    abbreviation: string
}

interface NHL_League_Record_Type extends League_Record_Type {
    ot: number
    type: string
}

