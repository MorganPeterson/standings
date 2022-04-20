type League_Type = {
    id: number
    link: string
}

type Team_ID_Type = {
    id: number
    name: string
    link: string
}

type Team_Type = {
    team: Team_ID_Type
    season: string
    wins: number
    losses: number
    winningPercentage: string
    divisionGamesBack: string
}

type Record_Type = {
    standingType: string
    lastUpdated: string
    league: League_Type
    division: League_Type
    sport: League_Type
    teamRecords: Team_Type[]
}

interface LeagueProps {
    leagueId: number,
    leagueName: string
}

interface Parsed_Team {
    id: number
    name: string,
    wins: number,
    losses: number,
    pct: string,
    gb: string
}

interface Get_Game_Data {
    lastUpdated: string
    division: string
    divId: number
    leagueId: number
    records: Parsed_Team[]
}

type Get_Game_Type = {
    loading: boolean
    id: number
    lastUpdated: string
    data: Get_Game_Data[]
}

interface DivTableProps {
    division: Get_Game_Data
}

interface LeagueDetails {
    id: number
    title: string
    color: string
}

declare function openDatabase(): SQLite.WebSQLDatabase

