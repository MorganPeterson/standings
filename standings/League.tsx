import { View, Text } from 'react-native'
import { headerColor } from './constants'
import Division from './Division'

export default function League({ name, league, sport }: any) {
    return (
        <View>
            <Text style={ headerColor(name) }>{name}</Text>
            { Object.keys(league).map((key: string) =>
                <Division
                    key={key}
                    name={key}
                    sport={sport}
                    division={league[key]}/>)}
        </View>
    )
}

