import {useEffect, useState} from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import * as SQLite from 'expo-sqlite'
import DivisionTable from './DivisionTable'
import { selectLeagueData, openDatabase } from './database'

export default function League({ leagueName, leagueId }: LeagueProps) {
    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<Get_Game_Data[]>([])

    useEffect(() => {
        if (isLoading) {
            openDatabase().then((db: SQLite.WebSQLDatabase) => {
                selectLeagueData(leagueId, db, setData)
                setLoading(false)
            })
        }
    }, [isLoading])

    return (
        <View>
            <Text
                style={{
                    color: 'white',
                    backgroundColor: leagueId === 103 ? 'red' : 'blue'}}>
                    {leagueName}</Text>
            {isLoading
                ? <ActivityIndicator />
                : data.map((division: Get_Game_Data) =>
                <DivisionTable key={division.divId} division={division} />)}
        </View>
    )
}

