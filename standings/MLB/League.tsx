import {useEffect, useState} from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { headerColor } from './constants'
import DivisionTable from './DivisionTable'
import getGames from './getGames'

export default function League({ leagueName, leagueId }: LeagueProps) {
    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<Get_Game_Data[]>([])

    useEffect(() => {
        getGames(leagueId).then((d: Get_Game_Type) => {
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
                : data.map((division: Get_Game_Data) =>
                    <DivisionTable
                        key={division.divId}
                        division={division}
                    />)
            }
        </View>
    )
}

