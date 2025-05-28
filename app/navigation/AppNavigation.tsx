import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import AddPhotoScreen from '../screens/AddPhotoScreen';
import AddTripScreen from '../screens/AddTripScreen';
import GalleryScreen from '../screens/GalleryScreen';
import HomeScreen from '../screens/HomeScreen';
import TripDetailScreen from '../screens/TripDetailScreen';
import Routes from './Routes';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes.HOME}
        screenOptions={{
            headerShown: true,
            headerStyle: { backgroundColor: '#f85f6a' },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}>
            <Stack.Screen name={Routes.HOME} component={HomeScreen} options={{title: 'PhotoTrip'}} />
            <Stack.Screen name={Routes.ADD_TRIP} component={AddTripScreen} options={{title: 'New Trip'}} />
            <Stack.Screen name={Routes.TRIP_DETAIL} component={TripDetailScreen} options={{title: 'Trip Details'}} />
            <Stack.Screen name={Routes.ADD_PHOTO} component={AddPhotoScreen} options={{title: 'Add Photo'}} />
            <Stack.Screen name={Routes.GALLERY} component={GalleryScreen} options={{title: 'Gallery'}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
