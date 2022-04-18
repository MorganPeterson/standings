import * as SQLite from 'expo-sqlite'
import getGames from './getGames'
import {SQLResultSet} from 'expo-sqlite'

function selectLeagueData(id: number, db: SQLite.WebSQLDatabase, cb: any): void {
    db.transaction(tx => {
        tx.executeSql(
            'select * from standings where id=?',
            [id],
            (_, r) => parseSelect(r, id, db, cb),
            (_, e) => parseSelectErr(e))
    })
}

function fetchLeagueData(id: number, db: SQLite.WebSQLDatabase, cb: any): void {
    getGames(id).then(games => {
        db.transaction(tx => {
            tx.executeSql(
                'insert or replace into standings (id, lastUpdated, records) values (?, ?, ?)',
                [games.id, games.lastUpdated, JSON.stringify(games.data)])
        })
        cb(games.data)
    })
}

function parseSelect(result: SQLResultSet, id: number, db: SQLite.WebSQLDatabase, cb: any): void {
    const { rows: { _array } } = result
    if (_array.length > 0) {
        const oldDate = new Date(_array[0].lastUpdated).valueOf()
        const newDate = new Date().valueOf()
        const difDate = newDate - oldDate

        if (difDate > 3600000) {
            fetchLeagueData(id, db, cb)
        } else {
            cb(JSON.parse(_array[0].records))
        }
        return
    }
    fetchLeagueData(id, db, cb)
}

function parseSelectErr(err: SQLite.SQLError): boolean {
    console.error(`errMsg -> ${err}`)
    return true
}

async function openDatabase(): Promise<SQLite.WebSQLDatabase> {
  return SQLite.openDatabase('standings.db');
}

function createStandingsTable(db: SQLite.WebSQLDatabase): void {
    db.transaction(tx => {
        tx.executeSql(
            `create table if not exists standings (id integer primary key not null, lastUpdated text, records text)`
        )})
}

export { openDatabase, createStandingsTable, selectLeagueData }
