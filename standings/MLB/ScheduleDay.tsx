import { View, Text } from 'react-native'
import ScheduleGame from './ScheduleGame'

interface ScheduleDay_Props {
    today: MLB_Date
}

export default function ScheduleDay({ today }: ScheduleDay_Props) {
    return (
        <View>
            <Text>{today.date}</Text>
            { today.games.map(g => <ScheduleGame key={g.gamePk} game={g} />) }
        </View>
    )
}

