import { View, Text } from 'react-native'
import OngoingGame from './OngoingGame'

interface ScheduleGame_Props {
    game: NHL_Schedule_Games
}

export default function ScheduleGame({ game }: ScheduleGame_Props) {
    const timeRaw = new Date(game.gameDate)
    const t: string = `${timeRaw.getHours()}:${timeRaw.getMinutes() < 10 ? 0 : ''}${timeRaw.getMinutes()}`

    return (
        <View>
            { game.status.abstractGameState === 'Preview'
                ? <Text>{`${game.teams.away.team.name} @ ${game.teams.home.team.name} ${t}`}</Text>
                : <OngoingGame game={game} />}
        </View>
    )
}


