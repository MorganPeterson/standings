import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UpcomingGame from '../UpcomingGame'
import OngoingGame from './OngoingGame'

interface ScheduleDay_Props {
    today: MLB_Schedule_Date
}

export default function ScheduleDay({ today }: ScheduleDay_Props) {
    const [upcoming, setUpcoming] = useState<MLB_Schedule_Game[]>([])
    const [ongoing, setOngoing] = useState<MLB_Schedule_Game[]>([])

    useEffect(() => {
        const uc = today.games.filter((g: MLB_Schedule_Game) => g.status.abstractGameCode === 'P')
        const og = today.games.filter((g: MLB_Schedule_Game) => g.status.abstractGameCode !== 'P')

        setUpcoming(uc)
        setOngoing(og)
    },[])

    return (
        <View>
            <Text style={styles.dateText}>{today.date}</Text>
            { upcoming.map((g: MLB_Schedule_Game) => <UpcomingGame game={g} />) }
            { ongoing.map((g: MLB_Schedule_Game) => <OngoingGame
                    homeTeam={g.teams.home.team.name}
                    awayTeam={g.teams.away.team.name}
                    gamePk={g.gamePk}
                    status={g.status.abstractGameState}
                />)}
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
