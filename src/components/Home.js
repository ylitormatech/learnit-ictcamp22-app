import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';


import { Amplify } from 'aws-amplify';

import { Link, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import awsExports from '../aws-exports';

import '../App.css';
import { NavigationButtonForward, NavigationButtonBack, Kysymys1 } from '../ui-components';
import Header from "../ui-components/Header";

Amplify.configure(awsExports);

function Home(/*{ signOut, user }*/) {
  return (
      <div>
          <h2>ICT-Camp vaikuttavuuskysely</h2>
          <div className='info'>
              <p>Kyselyn pohjustusteksti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed ac ullamcorper ipsum.. Ut sollicitudin justo ut nulla facilisis, egestas congue ex faucibus.</p>
          </div>

      </div>
  );
}


export default Home
