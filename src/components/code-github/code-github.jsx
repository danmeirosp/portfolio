import React, {Component} from 'react';
import {Card,CardHeader,CardActions,CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div className="code-github">
            {/*titulo do card para ver o codigo*/}
              <p className="headline">Look at my code, my code is amazing</p>
                <Card>
                  <CardHeader
                    subtitle="Github Repository"
                    title="github.com/danmeirosp"
                    avatar="./assets/github.png"
                  />
                  {/*texto com a descrição do projeto*/}
                <CardText>
                        This application is made with React. Check out the code on Github.
                    </CardText>
                    {/*card com o link do codigo*/}
                    <CardActions>
                        <FlatButton label="View my code in github" href="https://github.com/danmeirosp/portfolio" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;
