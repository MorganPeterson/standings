import { fetchGetHeaders, mlbScheduleEndpoint, nhlScheduleEndpoint } from './constants'
import ApiFetch from './apiFetch'

async function getSchedule<T>(today: string, sport: string): Promise<T> {
    if (sport === 'mlb')
        return ApiFetch<T>(`${mlbScheduleEndpoint}${today}`, fetchGetHeaders)
    else
        return ApiFetch<T>(`${nhlScheduleEndpoint}${today}&endDate=${today}`, fetchGetHeaders)
}

export default getSchedule
