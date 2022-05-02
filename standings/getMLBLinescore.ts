import { fetchGetHeaders, mlbLinescoreEndpoint } from './constants'

async function getMLBLinescore(gamePk: number): Promise<MLB_Linescore> {
    try {
        const response = await fetch(`${mlbLinescoreEndpoint}/${gamePk}/linescore`, fetchGetHeaders)
        const json: MLB_Linescore = await response.json()
        return json
    } catch (error) {
        throw new Error(error.message)
    }
}

export { getMLBLinescore }
