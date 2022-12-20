import { Amplify } from 'aws-amplify';
import { Link, Flex, Heading, withAuthenticator } from '@aws-amplify/ui-react';
import {
    BrowserRouter as Router,
    Link as ReactRouterLink,
    Routes,
    Route,
} from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import './App.css';
import SurveyFirstPage from './components/SurveyFirstPage';
import Home from './components/Home';
import Header from "./ui-components/Header";
Amplify.configure(awsExports);

function App({ signOut, user }) {

  return (
    <div>
      <div class="header">
        <h1>BEARIT</h1>
      </div>
        <Router>
          <div class='nav'>
            <Flex>
                <ReactRouterLink to="/" component={Link}>Home</ReactRouterLink>
                <ReactRouterLink to="/kysely" component={Link}>Kysely</ReactRouterLink>
            </Flex>
            </div>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/kysely" element={<SurveyFirstPage />} />
              </Routes>
        </Router>
      <div class='user'>
        <p>Hello {user.username}</p>
        <button onClick={signOut}>Kirjaudu ulos</button>
      </div>

    </div>
  );
};
export default withAuthenticator(App);
