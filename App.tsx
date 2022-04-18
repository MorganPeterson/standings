import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MLBStandings from './standings/MLB/MLBStandings'
import HomeScreen from './standings/HomeScreen'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Standings' }}
                />
                <Stack.Screen
                    name="MLBStandings"
                    component={MLBStandings}
                    options={{ title: 'MLB Standings'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

