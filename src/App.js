import React from 'react';
import NavBar from "./Components/NavBar";
import Article from "./Components/Article";
import './App.scss';

import bg_intro from "./images/bg-intro-desktop.svg";
import mockups from "./images/image-mockups.png";
import icon_online from "./images/icon-online.svg";
import icon_budgeting from "./images/icon-budgeting.svg";
import icon_onboarding from "./images/icon-onboarding.svg";
import icon_api from "./images/icon-api.svg";
import image_currency from "./images/image-currency.jpg";
import image_restaurant from "./images/image-restaurant.jpg";
import image_plane from "./images/image-plane.jpg";
import image_confetti from "./images/image-confetti.jpg";
import icon_facebook from "./images/icon-facebook.svg";
import icon_youtube from "./images/icon-youtube.svg";
import icon_twitter from "./images/icon-twitter.svg";
import icon_pinterest from "./images/icon-pinterest.svg";
import icon_instagram from "./images/icon-instagram.svg";

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
        <div className={"Articles"}>
          <h1 className={"Articles-Heading"}>Latest Articles</h1>
          <div className={"Articles-Grid"}>
            <Article ArticleImage={image_currency} Author={"Claire Robinson"} Heading={"Receive money in any currency with no fees"} Body={"The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."}/>
            <Article ArticleImage={image_restaurant} Author={"Wilson Hutton"} Heading={"Treat yourself without worrying about money"} Body={"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."}/>
            <Article ArticleImage={image_plane} Author={"Wilson Hutton"} Heading={"Take your Easybank card wherever you go"} Body={"We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."}/>
            <Article ArticleImage={image_confetti} Author={"Claire Robinson"} Heading={"Our invite-only Beta accounts are now live!"} Body={"After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."}/>
          </div>
        </div>
        <div className={"Footer"}>
          <div className={"Footer-Logo"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="139" height="20"><defs><linearGradient id="a" x1="72.195%" x2="17.503%" y1="0%" y2="100%"><stop offset="0%" stopColor="#33D35E"/><stop offset="100%" stopColor="#2AB6D9"/></linearGradient></defs><g fill="none" fillRule="evenodd"><path className={"Logo-Text"} fill="#2D314D" fillRule="nonzero" d="M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z"/><g fill="url(#a)"><path d="M10.802 0L0 19.704h5.986L16.789 0z"/><path opacity=".5" d="M18.171 0L7.368 19.704h5.986L24.157 0z"/><path opacity=".15" d="M25.539 0L14.737 19.704h5.986L31.525 0z"/></g></g></svg>
          </div>
          <div className={"Footer-Socials"}>
            <button className={"Footer-Socials-Button"}>
              <img src={icon_facebook} alt={"facebook"}/>
            </button>
            <button className={"Footer-Socials-Button"}>
              <img src={icon_youtube} alt={"youtube"}/>
            </button>
            <button className={"Footer-Socials-Button"}>
              <img src={icon_twitter} alt={"twitter"}/>
            </button>
            <button className={"Footer-Socials-Button"}>
              <img src={icon_pinterest} alt={"pinterest"}/>
            </button>
            <button className={"Footer-Socials-Button"}>
              <img src={icon_instagram} alt={"instagram"}/>
            </button>
          </div>
          <div className={"Footer-Links"}>
            <span className={"Footer-Links-Text"}>About Us</span>
            <span className={"Footer-Links-Text"}>Careers</span>
            <span className={"Footer-Links-Text"}>Contact</span>
            <span className={"Footer-Links-Text"}>Support</span>
            <span className={"Footer-Links-Text"}>Blog</span>
            <span className={"Footer-Links-Text"}>Privacy Policy</span>
          </div>
          <button className={"Footer-Button"}>Request Invite</button>
          <span className={"Footer-Copyright"}>&#169; Easybank. All Rights Reserved</span>
        </div>
      </div>
    );
  }
}

export default App;
