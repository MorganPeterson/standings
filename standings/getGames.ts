import {
    fetchGetHeaders,
    mlbStandingsEndpoint,
    nhlStandingsEndpoint
} from './constants'

function divisionName(id: number): string {
    switch (id) {
        case 200: return `western`
        case 201: return `eastern`
        case 202: return `central`
        case 203: return `western`
        case 204: return `eastern`
        case 205: return `central`
        default: return 'unknown'
    }
}

async function getMLBLeague(leagueId: number): Promise<any> {
    let x: any = {}
    try {
        const response = await fetch(`${mlbStandingsEndpoint}${leagueId}`, fetchGetHeaders)
        const json: MLB_Standings_Type = await response.json()
        json?.records.forEach((record: MLB_Record_Type) => {
            const dn: string = divisionName(record.division.id)
            x[dn] = record.teamRecords
        })
        return x
    } catch (error) {
        throw new Error(error)
    }
}

async function getMLBGames(): Promise<any> {
    const american = await getMLBLeague(103)
    const national = await getMLBLeague(104)
    return { american, national }
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

