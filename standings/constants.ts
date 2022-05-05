const homeNavDetails = [{
    key: 'mlbhome',
    component: 'MLBHome',
    title: 'Major League Baseball'
},
{
    key: 'nhlhome',
    component: 'NHLHome',
    title: 'National Hockey League'
}]

const mlbNavDetails = [{
    key: 'mlbstandings',
    component: 'MLBStandings',
    title: 'Standings'
},
{
    key: 'mlbschedule',
    component: 'MLBSchedule',
    title: 'Schedule'
}]

const nhlNavDetails = [{
    key: 'nhlstandings',
    component: 'NHLStandings',
    title: 'Standings'
},
{
    key: 'nhlschedule',
    component: 'NHLSchedule',
    title: 'Schedule'
}]

const fetchGetHeaders: object = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
}

const AL: League_Details = {
    id: 103,
    title: 'American League',
    color: 'red'
}

const NL: League_Details = {
    id: 104,
    title: 'National League',
    color: 'blue'
}

const statsApi = 'https://statsapi.'
const mlbApi = 'mlb.com/api/v1'

const nhlApi = 'web.nhl.com/api/v1'

const mlbStandingsEndpoint = `${statsApi}${mlbApi}/standings?leagueId=`
const mlbScheduleEndpoint = `${statsApi}${mlbApi}/schedule/games?sportId=1&date=`
const mlbLinescoreEndpoint = `${statsApi}${mlbApi}/game`

const nhlStandingsEndpoint = `${statsApi}${nhlApi}/standings`
const nhlScheduleEndpoint = `${statsApi}${nhlApi}/schedule?expand=schedule.linescore&startDate=`

const colHeaderText = (division: string, sport: string): string[] => {
    return sport === 'mlb'
        ? [division, 'w', 'l', 'pct', 'gb']
        : [division, 'gp', 'w', 'l', 'ot', 'p']
}

const colFlexSize = (sport: string): number[] => {
    return sport === 'mlb'
        ? [3, 1, 1, 1, 1]
        : [4, 1, 1, 1, 1, 1.1]
}

const headerColor = (id: string, sport: string): object => {
    return sport === 'mlb'
        ? {
            color: 'white',
            backgroundColor: id === 'american' ? AL.color : NL.color}
        : {
            color: 'white',
            backgroundColor: id === 'Eastern' ? 'red' : 'blue'}
}

const returnMLBRowData = (team: MLB_Team_Records_Type): Array<string|number> => {
    return [team.team.name, team.wins, team.losses, team.winningPercentage, team.gamesBack]
}

const returnNHLRowData = (team: NHL_Team_Records_Type): Array<string|number> => {
    return [
        team.team.name,
        team.gamesPlayed,
        team.leagueRecord.wins,
        team.leagueRecord.losses,
        team.leagueRecord.ot,
        team.points]

}

function teamRowData(team: MLB_Team_Records_Type| NHL_Team_Records_Type, sport: string): Array<string|number> {
    return sport === 'mlb'
        ? returnMLBRowData(team as MLB_Team_Records_Type)
        : returnNHLRowData(team as NHL_Team_Records_Type)
}

export {
    AL,
    NL,
    homeNavDetails,
    mlbNavDetails,
    nhlNavDetails,
    fetchGetHeaders,
    mlbStandingsEndpoint,
    mlbScheduleEndpoint,
    mlbLinescoreEndpoint,
    nhlStandingsEndpoint,
    nhlScheduleEndpoint,
    colHeaderText,
    colFlexSize,
    teamRowData,
    headerColor
}
