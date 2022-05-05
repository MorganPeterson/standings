interface Division_Table_Props_Type {
    name: string
    sport: string
    division: Get_Game_Data
}

interface ScheduleGame_Props {
    game: MLB_Schedule_Game | NHL_Schedule_Game
}

interface NHL_ScheduleDay_Props {
    today: NHL_Schedule_Date
}

interface NHL_OngoingGame_Props {
    game: NHL_Schedule_Game
}


