import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MLBStandings from './standings/MLB/MLBStandings'
import NHLStandings from './standings/NHL/NHLStandings'
import MLBSchedule from './standings/MLB/MLBSchedule'
import NHLSchedule from './standings/NHL/NHLSchedule'
import HomeScreen from './standings/HomeScreen'
import MLBHome from './standings/MLB/MLBHome'
import NHLHome from './standings/NHL/NHLHome'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Sports' }}
                />
                <Stack.Screen
                    name="MLBHome"
                    component={MLBHome}
                    options={{ title: 'Major League Baseball'}}
                />
                <Stack.Screen
                    name="NHLHome"
                    component={NHLHome}
                    options={{ title: 'National Hockey League'}}
                />
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

