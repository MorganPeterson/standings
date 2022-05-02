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

