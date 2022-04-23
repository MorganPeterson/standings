import { scheduleApi } from './constants'

async function getSchedule(): Promise<NHL_Schedule> {
    try {
        const response = await fetch(`${scheduleApi}?expand=schedule.linescore`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }})
        const json: NHL_Schedule = await response.json()
        return json
    } catch (error) {
        throw new Error(error.message)
    }
}

export { getSchedule }
