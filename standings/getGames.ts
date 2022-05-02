import {
    fetchGetHeaders,
    mlbStandingsEndpoint,
    nhlStandingsEndpoint
} from './constants'

const div: string = ' Division'

function divisionRecords(division: MLB_Record_Type): MLB_Team_Parse_Type[] {
    return division.teamRecords.map((team: MLB_Team_Records_Type): MLB_Team_Parse_Type => (
        {
            id: team.team.id,
            name: team.team.name,
            wins: team.wins,
            losses: team.losses,
            pct: team.winningPercentage,
            gb: team.divisionGamesBack
        }))
}

function divisionName(id: number): string {
    switch (id) {
        case 200: return `Western ${div}`
        case 201: return `Eastern ${div}`
        case 202: return `Central ${div}`
        case 203: return `Western ${div}`
        case 204: return `Eastern ${div}`
        case 205: return `Central ${div}`
        default: return div
    }
}

async function getMLBGames(leagueId: number): Promise<MLB_Get_Game_Type> {
    let data: MLB_Record_Parse_Type[] = []
    try {
        const response = await fetch(`${mlbStandingsEndpoint}${leagueId}`, fetchGetHeaders)
        const json: MLB_Standings_Type = await response.json()
        data = json?.records.map((division: MLB_Record_Type): MLB_Record_Parse_Type => ({
            lastUpdated: division.lastUpdated,
            division: divisionName(division.division.id),
            divId: division.division.id,
            leagueId: division.league.id,
            records: divisionRecords(division)
        }))
    } catch (error) {
        console.error(error)
        const updateTime = new Date().toString()
        return {loading: false, id: leagueId, lastUpdated: updateTime, data}
    } finally {
        return {
            loading: false,
            id: leagueId,
            lastUpdated: data[0].lastUpdated,
            data
        }
    }
}


async function getNHLGames(): Promise<any> {
    let x: any = {}
    try {
        const response = await fetch(nhlStandingsEndpoint, fetchGetHeaders)
        const json: NHL_Standings_Type = await response.json()
        json?.records.forEach((record: NHL_Record_Type) => {
            if (!(record.conference.name in x))
                x[record.conference.name] = {}

            x[record.conference.name][record.division.name] = record.teamRecords
        })
        return x
    } catch (error) {
        throw new Error(error.message)
    }
}

export { getMLBGames, getNHLGames }

