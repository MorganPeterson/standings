import {useEffect, useState} from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { headerColor } from './constants'
import Division from './Division'
import { getMLBGames } from '../getGames'

export default function League({ leagueName, leagueId }: LeagueProps) {
    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<MLB_Record_Parse_Type[]>([])

    useEffect(() => {
        getMLBGames(leagueId).then((d: Get_Game_Type) => {
            setData(d.data)
            setLoading(d.loading)
        })
    }, [isLoading])

    return (
        <View>
            <Text style={ headerColor(leagueId) }>
                {leagueName}
            </Text>
            {isLoading
                ? <ActivityIndicator size="large" />
                : data.map((division: MLB_Record_Parse_Type) =>
                <Division
                    key={division.divId}
                    name={division.division}
                    sport='mlb'
                    division={division}/>)}
        </View>
    )
}

