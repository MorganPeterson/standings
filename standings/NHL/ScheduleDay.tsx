import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UpcomingGame from '../UpcomingGame'
import OngoingGame from './OngoingGame'

interface ScheduleDay_Props {
    today: NHL_Date
}

export default function ScheduleDay({ today }: ScheduleDay_Props) {
    const [upcoming, setUpcoming] = useState<NHL_Schedule_Games[]>([])
    const [ongoing, setOngoing] = useState<NHL_Schedule_Games[]>([])

    useEffect(() => {
        const uc = today.games.filter((g: NHL_Schedule_Games) => g.status.abstractGameState === 'Preview')
        const og = today.games.filter((g: NHL_Schedule_Games) => g.status.abstractGameState !== 'Preview')

        setUpcoming(uc)
        setOngoing(og)
    },[])

    return (
        <View>
            <Text style={styles.dateText}>{today.date}</Text>
            { upcoming.map((g: NHL_Schedule_Games) => <UpcomingGame key={g.gamePk} game={g} />) }
            { ongoing.map((g: NHL_Schedule_Games) => <OngoingGame key={g.gamePk} game={g} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    dateText: {
        backgroundColor: 'white',
        color: '#656667',
        fontWeight: 'bold',
        padding: 16
    }
})

