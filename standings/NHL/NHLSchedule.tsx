import {useEffect, useState} from 'react'
import { ActivityIndicator, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import ScheduleDay from './ScheduleDay'
import { getNHLSchedule } from '../getSchedule'
import GetGameDate from '../gameDate'

export default function NHLSchedule() {
    const [isLoading, setLoading] = useState<boolean>(true)
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
        const t: string = GetGameDate()
        getNHLSchedule(t).then((d: any) => {
            setData(d)
            setLoading(false)
        })
    }, [isLoading])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {isLoading
                    ? <ActivityIndicator />
                    : data.dates.map(d =>
                        <ScheduleDay key={d.date} today={d} />)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
    }
})

