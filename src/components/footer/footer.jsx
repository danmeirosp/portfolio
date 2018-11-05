import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import './footer.css';

const scrollTo = require('scroll-to');

class FooterComponent extends Component {
//definição da animação do scroll
  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      //links para acessar as redes socias(rodape)
      <div className="footer">
        <div className="link-list">
          <a target="_blank" href="https://github.com/danmeirosp">
            Github
          </a>
           /
          <a target="_blank" href="https://www.facebook.com/daniel.medeiros.31">
            Facebook
          </a>
           /
          <a target="_blank" href="https://www.linkedin.com/in/daniel-medeiros-6531ba141/">
            LinkedIn
          </a>
        </div>
        
        {/*animação do scroll*/}
        <FlatButton label="Back to home" onClick={this.onScrollToTop}  backgroundColor="#fff"/>
      </div>
    );
  }
}

export default FooterComponent;
