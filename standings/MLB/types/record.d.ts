type League_Type = {
    id: number
    link: string
}

type Team_ID_Type = {
    id: number
    name: string
    link: string
}

type Team_Type = {
    team: Team_ID_Type
    season: string
    wins: number
    losses: number
    winningPercentage: string
    divisionGamesBack: string
}

interface LeagueProps {
    leagueId: number,
    leagueName: string
}

interface ConferenceProps {
    conferenceId: number
    conferenceName: string
}

interface LeagueDetails {
    id: number
    title: string
    color: string
}

