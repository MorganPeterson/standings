import {
    fetchGetHeaders,
    mlbStandingsEndpoint,
    nhlStandingsEndpoint,
    AL,
    NL
} from './constants'
import ApiFetch from '../apiFetch'

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

function mlbGamesParser(json: MLB_Standings_Type): Division_Type {
    let x: Division_Type = <Division_Type>{}
    json?.records.forEach((record: MLB_Record_Type) => {
        const dn: string = divisionName(record.division.id)
            x[dn] = record.teamRecords
        })
        return x
}

function nhlGamesParser(json: NHL_Standings_Type): Get_Standings_Type {
    let x: Get_Standings_Type = <Get_Standings_Type>{}
    json?.records.forEach((record: NHL_Record_Type) => {
        if (!(record.conference.name in x))
            x[record.conference.name] = <Conference_Type>{}
        x[record.conference.name][record.division.name] = record.teamRecords
    })
    return x
}

async function getMLBLeague(leagueId: number): Promise<Division_Type> {
    return ApiFetch<MLB_Standings_Type>(`${mlbStandingsEndpoint}${leagueId}`, fetchGetHeaders)
        .then((json: MLB_Standings_Type) => {
            return mlbGamesParser(json)
        }).catch(() => {
            return <Division_Type>{}
        })
}

async function getMLBGames(): Promise<Get_League_Type> {
    const american = await getMLBLeague(AL.id)
    const national = await getMLBLeague(NL.id)
    return { american, national }
}

async function getNHLGames(): Promise<Get_Standings_Type> {
    return ApiFetch<NHL_Standings_Type>(nhlStandingsEndpoint, fetchGetHeaders)
        .then((json: NHL_Standings_Type) => {
            return nhlGamesParser(json)
        })
        .catch(() => {
            return <Get_Standings_Type>{}
        })
}

export { getMLBGames, getNHLGames }

