import React from 'react';
import NavBar from "./Components/NavBar";
import './App.scss';

import bg_intro from "./images/bg-intro-desktop.svg";
import mockups from "./images/image-mockups.png";
import icon_online from "./images/icon-online.svg";
import icon_budgeting from "./images/icon-budgeting.svg";
import icon_onboarding from "./images/icon-onboarding.svg";
import icon_api from "./images/icon-api.svg";

class App extends React.Component {
  render() {
    return(
      <div className={"App"}>
        <NavBar/>
        <div className={"Intro"}>
          <img className={"Intro-BGImage"} src={bg_intro} alt={"bg intro"}/>
          <div className={"Intro-Main"}>
            <h1 className={"Intro-Heading"}>
              Next generation digital banking
            </h1>
            <p className={"Intro-Body"}>
              Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
            </p>
            <button className={"Intro-Button"}>Request Invite</button>
          </div>
        </div>
        <div className={"Info"}>
          <h1 className={"Info-Heading"}>
            Why choose Easybank?
          </h1>
          <p className={"Info-Body"}>
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </p>
          <div className={"Info-InfoBlocks"}>
            <div className={"Info-InfoBlocks-InfoBlock"}>
              <img src={icon_online} alt={"online"}/>
              <h3 className={"Info-InfoBlocks-InfoBlock-Heading"}>
                Online Banking
              </h3>
              <p className={"Info-InfoBlocks-InfoBlock-Body"}>
                Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
              </p>
            </div>
            <div className={"Info-InfoBlocks-InfoBlock"}>
              <img src={icon_budgeting} alt={"budgeting"}/>
              <h3 className={"Info-InfoBlocks-InfoBlock-Heading"}>
                Simple Budgeting
                </h3>
              <p className={"Info-InfoBlocks-InfoBlock-Body"}>
                See exactly where your money goes each month. Receive notifications when your close to hitting your limits.
              </p>
            </div>
            <div className={"Info-InfoBlocks-InfoBlock"}>
              <img src={icon_onboarding} alt={"onboarding"}/>
              <h3 className={"Info-InfoBlocks-InfoBlock-Heading"}>
                Fast Onboarding
              </h3>
              <p className={"Info-InfoBlocks-InfoBlock-Body"}>
                We don't do branches. Open your account in minutes online and start taking control of your finances right away.
              </p>
            </div>
            <div className={"Info-InfoBlocks-InfoBlock"}>
              <img src={icon_api} alt={"api"}/>
              <h3 className={"Info-InfoBlocks-InfoBlock-Heading"}>
                Open API
              </h3>
              <p className={"Info-InfoBlocks-InfoBlock-Body"}>
                Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
          <img className={"Info-Mockups"} src={mockups} alt={"mockups"}/>
        </div>
      </div>
    );
  }
}

export default App;
