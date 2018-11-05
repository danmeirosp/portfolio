import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'roboto-npm-webfont';
import './App.css';

import HeaderComponent from './components/header/header';
import MenuComponent from './components/menu/menu';
import IntroductionComponent from './components/introduction/introduction';
import ProfileComponent from './components/profile/profile';
import BlogComponent from './components/blog/blog';
import SkillsComponent from './components/skills/skills';
import BiographyComponent from './components/biography/biography';
import PortfolioComponents from './components/portfolio/portfolio';
import CodeGithubComponent from './components/code-github/code-github';
import ContactComponent from './components/contact/contact';
import FooterComponent from './components/footer/footer';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="section header-section">
            <div className="section-container header-component">
              <HeaderComponent></HeaderComponent>
            </div>
          </div>
          <div className="section menu">
            <div className="section-menu">
              <MenuComponent></MenuComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container">
              <IntroductionComponent></IntroductionComponent>
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <ProfileComponent></ProfileComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container">
              <SkillsComponent></SkillsComponent>
            </div>
          </div>
          <div className="section ">
            <div className="section-container">
              <BlogComponent></BlogComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container">
              <PortfolioComponents></PortfolioComponents>
            </div>
          </div>
          <div className="section dark">
            <div className="section-container">
              <BiographyComponent></BiographyComponent>
            </div>
          </div>          
          <div className="section colored">
            <div className="section-container">
              <CodeGithubComponent></CodeGithubComponent>
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <ContactComponent></ContactComponent>
            </div>
          </div>
          <div className="section dark">
            <div className="section-container footer-component">
              <FooterComponent></FooterComponent>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
