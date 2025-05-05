import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FrameworkSelectionScreen from './screens/FrameWorkSelectionScreen';
import AnalysisResultScreen from './screens/AnalysisResultScreen';
import FeedbackScreen from './screens/FeedbackScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ConstituCheck' }} />
        <Stack.Screen name="FrameworkSelection" component={FrameworkSelectionScreen} options={{ title: 'Select Legal Framework' }} />
        <Stack.Screen name="AnalysisResult" component={AnalysisResultScreen} options={{ title: 'Analysis Result' }} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} options={{ title: 'Feedback' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}