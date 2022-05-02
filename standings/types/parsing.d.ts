interface MLB_Team_Parse_Type {
    id: number
    name: string
    wins: number
    losses: number
    pct: string
    gb: string
}


interface MLB_Record_Parse_Type {
    lastUpdated: string
    division: string
    divId: number
    leagueId: number
    records: MLB_Team_Parse_Type[]
}

interface MLB_Get_Game_Type {
    loading: boolean
    id: number
    lastUpdated: string
    data: MLB_Record_Parse_Type[]
}

