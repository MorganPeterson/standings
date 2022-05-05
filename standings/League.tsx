import { View, Text } from 'react-native'
import { headerColor } from './constants'
import Division from './Division'

interface League_Props {
    name: string
    league: Get_Standings_Type | any
    sport: string
}

export default function League({ name, league, sport }: League_Props) {
    return (
        <View>
            <Text style={ headerColor(name, sport) }>{name}</Text>
            { Object.keys(league).map((key: string) =>
                <Division
                    key={key}
                    name={key}
                    sport={sport}
                    division={league[key]}/>)}
        </View>
    )
}

