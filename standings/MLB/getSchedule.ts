import { scheduleApi, linescoreApi, linescoreApiArg } from './constants'

async function getSchedule(): Promise<MLB_Schedule> {
    try {
        const response = await fetch(scheduleApi, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }})
        const json: MLB_Schedule = await response.json()
        return json
    } catch (error) {
        throw new Error(error.message)
    }
}

async function getLinescore(gamePk: number): Promise<MLB_Linescore> {
    try {
        const response = await fetch(`${linescoreApi}/${gamePk}/${linescoreApiArg}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }})
        const json: MLB_Linescore = await response.json()
        return json
    } catch (error) {
        throw new Error(error.message)
    }
}

export { getSchedule, getLinescore }
