import { scheduleApi } from './constants'

async function getSchedule(today: string): Promise<NHL_Schedule> {
    try {
        const response = await fetch(`${scheduleApi}${today}&endDate=${today}`, {
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
