import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UpcomingGame from '../UpcomingGame'
import OngoingGame from './OngoingGame'

export default function ScheduleDay({ today }: NHL_ScheduleDay_Props) {
    const [upcoming, setUpcoming] = useState<NHL_Schedule_Game[]>([])
    const [ongoing, setOngoing] = useState<NHL_Schedule_Game[]>([])

    useEffect(() => {
        const uc = today.games.filter((g: NHL_Schedule_Game) =>
                                      g.status.abstractGameState === 'Preview')
        const og = today.games.filter((g: NHL_Schedule_Game) =>
                                      g.status.abstractGameState !== 'Preview')

        setUpcoming(uc)
        setOngoing(og)
    },[])

    return (
        <View>
            <Text style={styles.dateText}>{today.date}</Text>
            { ongoing.map((g: NHL_Schedule_Game) => <OngoingGame key={g.gamePk} game={g} />)}
            { upcoming.map((g: NHL_Schedule_Game) => <UpcomingGame key={g.gamePk} game={g} />) }
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

