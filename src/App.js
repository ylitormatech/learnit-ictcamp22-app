import { Amplify } from 'aws-amplify';

import { Link, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import awsExports from './aws-exports';

import './App.css';
import { NavigationButtonForward } from './ui-components';

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
          Sed ac ullamcorper ipsum... Ut sollicitudin justo ut nulla facilisis, egestas congue ex faucibus.</p>
        </div>
        <p>Hello {user.username}</p>
        <button onClick={signOut}>Kirjaudu ulos</button>
        <NavigationButtonForward />
      </>
  );
}


export default withAuthenticator(App);
