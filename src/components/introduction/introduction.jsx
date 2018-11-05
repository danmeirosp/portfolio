import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import {CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './introduction.css';

class IntroductionComponent extends Component {
  render() {
    return (
        <div>
            <center>
            <div className="img">
                <Avatar src="./assets/avatar.jpg" size={150} />
            </div>
            </center>
            {/*introdução*/}
            <div className="introduction">
                <p className="introduction-text">
                    Hello, I'm Daniel Medeiros. Student Technology, I'm from Pilar do Sul – SP, currently live in em Cornélio Procópio – PR.
                </p>
            </div>
            
            {/*link para fazer o download do curriculum*/}
            <div className="file">
                <a target="_blank" href="./assets/myfile.pdf" download="danielmedeiros">
                   <center>
                    <CardActions>
                        <FlatButton label="Download Curriculum" target="_blank" href="./assets/myfile.pdf" download="daniel"/>
                    </CardActions>
                    </center>
                </a>
            </div>
        </div>
    );
  }
}

export default IntroductionComponent;
