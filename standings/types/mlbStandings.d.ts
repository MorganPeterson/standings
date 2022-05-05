interface MLB_Records_Type {
    splitRecords: MLB_Records_Type[]
    divisionRecords: MLB_Division_Records_Type[]
    overallRecords: MLB_Records_Type[]
    leagueRecords: MLB_League_Records_Type[]
    expectedRecords: MLB_Records_Type[]
}

interface MLB_Standings_Type extends Standings_Type {
    records: MLB_Record_Type[]
}

interface MLB_Record_Type extends Record_Type {
    division: ID_Type
    sport: ID_Type
    lastUpdated: string
    teamRecords: MLB_Team_Records_Type[]
}

interface MLB_Team_Records_Type extends Team_Records_Type {
    leagueRecord: MLB_League_Record_Type
    season: string
    sportRank: string
    gamesBack: string
    wildCardGamesBack: string
    leagueGamesBack: string
    springLeagueGamesBack: string
    sportGamesBack: string
    divisionGamesBack: string
    conferenceGamesBack:string
    records: MLB_Records_Type
    runsAllowed: number
    runsScored: number
    divisionChamp: boolean
    divisionLeader: boolean
    hasWildCard: boolean
    clinched: boolean
    eliminationNumber: string
    wildCardEliminationNumber: string
    magicNumber: string
    wins: number
    losses: number
    runDifferential: number
    winningPercentage: string
}

interface MLB_Records_Type extends League_Record_Type {
    type: string
    pct: string
}

interface MLB_Division_Records_Type extends League_Record_Type {
    pct: string
    division: ID_Type
}

interface MLB_League_Records_Type extends League_Record_Type {
    pct: string
    league: ID_Type
}

interface MLB_League_Record_Type extends League_Record_Type {
    ties: number
    pct: string
}

interface Division_Type {
    [index: string]: MLB_Team_Records_Type[]
}

interface Get_League_Type {
    [index: string]: Division_Type
}
