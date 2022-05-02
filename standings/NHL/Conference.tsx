import { View, Text } from 'react-native'
import Division from '../Division'
import { headerColor } from './constants'

export default function Conference({ name, conference }: any) {
    return (
        <View>
            <Text style={headerColor(name)}>{name}</Text>
            { Object.keys(conference).map((key: string) =>
                <Division
                    key={key}
                    name={key}
                    sport='nhl'
                    division={conference[key]}/>)}
        </View>
    )
}

