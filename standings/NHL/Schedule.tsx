import {useEffect, useState} from 'react'
import { ActivityIndicator, SafeAreaView } from 'react-native'
import Schedule from '../Schedule'
import GetSchedule from '../getSchedule'
import GetGameDate from '../gameDate'

function useNHLSchedule(): NHL_Schedule {
    const [data, setData] = useState<NHL_Schedule>({
        copyright: '',
        totalItems: 0,
        totalEvents: 0,
        totalGames: 0,
        totalMatches: 0,
        metaData: {
            timeStamp: ''
        },
        wait: 0,
        dates: []
    })

    useEffect(() => {
        let isUnmounted = false

        const t: string = GetGameDate()
        GetSchedule<NHL_Schedule>(t, 'nhl')
            .then((d: NHL_Schedule) => {
                if (!isUnmounted)
                    setData(d)
            })
        return () => {
            isUnmounted = true
        }
    }, [])
    return data
}

export default function NHLSchedule() {
    const data = useNHLSchedule()

    return (
        <SafeAreaView>
            {data === null
                ? <ActivityIndicator />
                : <Schedule data={data} sport='nhl' />
            }
        </SafeAreaView>
    )
}

