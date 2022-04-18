import divisionName from './divisionName'

function divisionRecords(division: Record_Type): Parsed_Team[] {
    return division.teamRecords.map((team: Team_Type) => (
        {
            id: team.team.id,
            name: team.team.name,
            wins: team.wins,
            losses: team.losses,
            pct: team.winningPercentage,
            gb: team.divisionGamesBack
        }))
}

async function getGames(leagueId: number): Promise<Get_Game_Type> {
    let data = []
    try {
        const response = await fetch(`https://statsapi.mlb.com/api/v1/standings?leagueId=${leagueId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }})
        const json = await response.json()
        data = json?.records.map((division: Record_Type) => ({
            lastUpdated: division.lastUpdated,
            division: divisionName(division.division.id),
            divId: division.division.id,
            leagueId: division.league.id,
            records: divisionRecords(division)
        }))
    } catch (error) {
        console.error(error)
        return {loading: false, id: leagueId, lastUpdated: '', data}
    } finally {
        return {
            loading: false,
            id: leagueId,
            lastUpdated: data[0].lastUpdated,
            data
        }
    }
}

export default getGames
