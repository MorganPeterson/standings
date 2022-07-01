import { fetchGetHeaders, mlbLinescoreEndpoint } from './constants'
import ApiFetch from './apiFetch'

async function getMLBLinescore(gamePk: number): Promise<MLB_Ongoing_Game> {
        return ApiFetch<MLB_Ongoing_Game>(`${mlbLinescoreEndpoint}/${gamePk}/linescore`, fetchGetHeaders)
}

export default getMLBLinescore

