import { Amplify } from 'aws-amplify';

import { Link, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

import './App.css';
import { NavigationButtonForward } from './ui-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import survey_first_page from './survey_first_page';

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <div class='header'>
        <h1>BEARIT</h1>
      </div>
      <h2>ICT-Camp vaikuttavuuskysely</h2>
      <div class='info'>
        <p>Kyselyn pohjustusteksti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ac ullamcorper ipsum.. Ut sollicitudin justo ut nulla facilisis, egestas congue ex faucibus.</p>
      </div>
      <p>Hello {user.username}</p>
      <button onClick={signOut}>Kirjaudu ulos</button>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            // Moihin tän kohdan pitäis mennä? Tai mitä tähän pitäis tulla?
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <>
              <Stack.Screen name="KysymysSivu" component={survey_first_page} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <NavigationButtonForward />
    </>
  );
}


export default withAuthenticator(App);
