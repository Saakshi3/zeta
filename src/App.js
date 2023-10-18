import logo from './logo.svg';
import './App.css';
import LoginPagePatient from './ui-components/LoginPagePatient';
import LoginPatientOnboarding from './ui-components/LoginPatientOnboarding';
import LoginPatientOnboarding03 from './ui-components/LoginPatientOnboarding03';
import LoginPatientOnboarding04 from './ui-components/LoginPatientOnboarding04';
import Login01SplashDesktop from './ui-components/Login01SplashDesktop';
import LoginPatientNewPassword from './ui-components/LoginPatientNewPassword';
import styled from 'styled-components';
import {ThemeProvider} from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import studioTheme, { LoginPatientForgotPassword, LoginPatientMobileVerification } from './ui-components';
import LoginPatientCreateanaccount from './ui-components/LoginPatientCreateanaccount';
import LoginPatientOnboarding02 from './ui-components/LoginPatientOnboarding';
Amplify.configure(awsconfig);



function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
   <Login01SplashDesktop/>
  );
}
 
export default App;
