import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { homeNavDetails, mlbNavDetails, nhlNavDetails } from './standings/constants'
import MLBStandings from './standings/MLB/Standings'
import NHLStandings from './standings/NHL/Standings'
import MLBSchedule from './standings/MLB/Schedule'
import NHLSchedule from './standings/NHL/Schedule'
import HomeScreen from './standings/HomeScreen'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ title: 'Sports' }}>
                    {props => <HomeScreen {...props} navDetails={homeNavDetails} />}
                </Stack.Screen>
                <Stack.Screen name="MLBHome" options={{ title: 'Major League Baseball' }}>
                    {props => <HomeScreen {...props} navDetails={mlbNavDetails} />}
                </Stack.Screen>
                <Stack.Screen name="NHLHome" options={{ title: 'National Hockey League' }}>
                    {props => <HomeScreen {...props} navDetails={nhlNavDetails} />}
                </Stack.Screen>
                <Stack.Screen
                    name="MLBStandings"
                    component={MLBStandings}
                    options={{ title: 'MLB Standings'}}
                />
                <Stack.Screen
                    name="NHLStandings"
                    component={NHLStandings}
                    options={{ title: 'NHL Standings'}}
                />
                <Stack.Screen
                    name="MLBSchedule"
                    component={MLBSchedule}
                    options={{ title: 'MLB Schedule'}}
                />
                <Stack.Screen
                    name="NHLSchedule"
                    component={NHLSchedule}
                    options={{ title: 'NHL Schedule'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

