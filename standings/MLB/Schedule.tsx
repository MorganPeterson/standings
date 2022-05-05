import {useEffect, useState} from 'react'
import { ActivityIndicator, SafeAreaView } from 'react-native'
import Schedule from '../Schedule'
import GetSchedule from '../getSchedule'
import GetGameDate from '../gameDate'

function useMLBSchedule(): MLB_Schedule {
    const [data, setData] = useState<MLB_Schedule>({
        copyright: '',
        totalItems: 0,
        totalEvents: 0,
        totalGames: 0,
        totalGamesInProgress: 0,
        dates: []
    })
    useEffect(() => {
        let isUnmounted = false
        const t: string = GetGameDate()
        GetSchedule<MLB_Schedule>(t, 'mlb').then((d: MLB_Schedule) => {
            if (!isUnmounted)
                setData(d)
        })
        return () => {
            isUnmounted = true
        }
    }, [])
    return data
}

export default function MLBSchedule() {
    const data: MLB_Schedule = useMLBSchedule()

    return (
        <SafeAreaView>
            {data === null
                ? <ActivityIndicator />
                : <Schedule data={data} sport='mlb'/>
            }
        </SafeAreaView>
    )
}

