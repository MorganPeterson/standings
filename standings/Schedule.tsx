import { ActivityIndicator, ScrollView } from 'react-native'
import MLBScheduleDay from './MLB/ScheduleDay'
import NHLScheduleDay from './NHL/ScheduleDay'

export default function Schedule({ data, sport }: Schedule_Props) {
    return (
        <ScrollView>
            {data === null
                ? <ActivityIndicator />
                : data.dates.map((d: MLB_Schedule_Date | NHL_Schedule_Date) => {
                    return sport === 'mlb'
                        ? <MLBScheduleDay key={d.date} today={d} />
                        : <NHLScheduleDay key={d.date} today={d} />
                })
            }
        </ScrollView>
    )
}

