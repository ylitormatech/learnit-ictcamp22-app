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
<<<<<<< HEAD
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
=======
        <h1>Vaikuttavuuskysely</h1>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
        
>>>>>>> e3d0c8f6f31c72d69653456acd98bf35b3d250b9
      </>
  );
}


<<<<<<< HEAD
=======

>>>>>>> e3d0c8f6f31c72d69653456acd98bf35b3d250b9
export default withAuthenticator(App);
