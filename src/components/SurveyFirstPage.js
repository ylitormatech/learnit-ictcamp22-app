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

function SurveyFirstPage(/*{ signOut, user }*/) {
  return (
      <>

        <h2>ICT-Camp vaikuttavuuskysely</h2>
        <div class='kysymys'>
          <Kysymys1 />
        </div>
        

      </>
  );
}


export default SurveyFirstPage
