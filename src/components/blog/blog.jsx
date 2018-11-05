import React, {Component} from 'react';
import {Card,CardHeader,CardActions,CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './blog.css';

class BlogComponent extends Component {

    render() {
        return (
            <div className="blog">
            {/*titulo do blog antes do card*/}
              <p className="headline">My blogs</p>
                {/*inicio do card*/}
                <Card>
                  <CardHeader
                    subtitle="Blog Technology"
                    title="Blog"
                    avatar="./assets/tec.jpg"
                  />
                  {/*card com a descrição dos blogs*/}
                <CardText>
                    <b>Alura</b>
                        <p>The blog is focused on general programming, front and applications</p>  
                    <b>Dev.to</b>
                        <p>The blog was founded with the goal of facilitating the exchange experience and knowledge among developers. Every developer can contribute to the blog.</p>  
                    <b>TechCrunch</b>
                        <p>TechCrunch is a well-known blog / website and brings the latest news and information about the technology industry.</p>        
                </CardText>
                    {/*card para linkar os blogs*/}
                    <CardActions>
                        <FlatButton label="Alura" href="http://blog.alura.com.br/" target="_blank"/>
                        <FlatButton label="Dev.to" href="https://dev.to/" target="_blank"/>
                        <FlatButton label="TechCrunch" href="https://techcrunch.com/" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default BlogComponent;
