import { fetchGetHeaders, mlbScheduleEndpoint, nhlScheduleEndpoint } from './constants'

async function getMLBSchedule(today: string): Promise<MLB_Schedule> {
    try {
        const response = await fetch(`${mlbScheduleEndpoint}${today}`, fetchGetHeaders)
        const json: MLB_Schedule = await response.json()
        return json
    } catch (error) {
        throw new Error(error.message)
    }
}

async function getNHLSchedule(today: string): Promise<NHL_Schedule> {
    try {
        const response = await fetch(`${nhlScheduleEndpoint}${today}&endDate=${today}`, fetchGetHeaders)
        const json: NHL_Schedule = await response.json()
        return json
    } catch (error) {
        throw new Error(error.message)
    }
}

export { getMLBSchedule, getNHLSchedule }
