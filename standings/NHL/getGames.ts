import { standingsApi } from './constants'

async function getGames(): Promise<any> {
    let x: any = {}
    try {
        const response = await fetch(standingsApi, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }})
        const json: Records = await response.json()
        json.records.forEach((record: Standings) => {
            if (!(record.conference.name in x))
                x[record.conference.name] = {}

            x[record.conference.name][record.division.name] = record.teamRecords
        })
        return x
    } catch (error) {
        throw new Error(error.message)
    }
}

export { getGames }
