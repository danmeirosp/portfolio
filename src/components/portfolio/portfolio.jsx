import React, {Component} from 'react';
import {CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './portfolio.css';


class PortfolioComponents extends Component {

    render() {
        return (
          <div className="portfolio">
            {/*titulo antes do card*/}
            <p className="headline">Portfolio</p>
            {/*descrição antes do card*/}
            <p className="text-justify"><br/>
                Check out some of my main works below.
            </p>
                {/*card com o titulo e link do codigo de cada trabalho feito*/}
              <div className="portfolio-choose">
                <div className="personal-curriculum">
                    <CardActions>
                        <FlatButton label="Personal Curriculum" target="_blank" href="https://github.com/danmeirosp/personal-curriculum"/>
                    </CardActions>
                </div>
                <div className="register-people">
                    <CardActions>
                        <FlatButton label="Register People" target="_blank" href="https://github.com/danmeirosp/register-people"/>
                    </CardActions>
                </div>
                <div className="project-bioinfo">
                    <CardActions>
                        <FlatButton label="Project BioInfo" target="_blank" href="https://github.com/danmeirosp/project-bioinfo"/>
                    </CardActions>
                </div>
                <div className="flex-ci">
                    <CardActions>
                        <FlatButton label="Flex Container and Item" target="_blank" href="https://github.com/danmeirosp/flexcontainer-flexitem"/>
                    </CardActions>
                </div>
                <div className="site-marriage">
                    <CardActions>
                        <FlatButton label="Site Marriage" target="_blank" href="https://github.com/danmeirosp/site-marriage"/>
                    </CardActions>
                </div>
                <div className="using-bootstrap">
                    <CardActions>
                        <FlatButton label="Using Bootstrap" target="_blank" href="https://github.com/danmeirosp/using-bootstrap"/>
                    </CardActions>
                </div>
              </div>

          </div>
        );
    }
}

export default PortfolioComponents;
