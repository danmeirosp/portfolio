import React, {Component} from 'react';
import './biography.css';


class BiographyComponent extends Component {

    render() {
        return (
          <div className="agile-biography">
          {/*titulo do texto*/}
          <p className="headline"> Biography </p>
            <p className="biography">
              {/*marcação*/}
              <span className="biography-marks">&ldquo;</span>
              {/*texto*/}
              <span className="biography-content">
              In 2015 I started the technological course in Maintenance and Support in Computer Science at the Federal Institute of São Paulo (IFSP). As a course completion job, I created a squid proxy server to increase performance in internet access. 
              In 2017 I started the higher level of technology in Analysis and Systems Development at the Federal Technological University of Paraná (UTFPR), and I intend to finish the course in 2019/2.</span>
            </p>
            <hr></hr> <br/>

            <p className="headline"> Profession </p>
            <p className="biography">
              {/*marcação*/}
              <span className="biography-marks">&ldquo;</span>
              {/*texto*/}
              <span className="biography-content">
                Everything began in my approximate 10 years when I won my first computer and from there I started to "tweak" everything.
                I have always tried to be willing to do research and update myself in this immense world called Technology.
                Through the University, I am doing internship and I hope to finish the course and to continue in the area of ​​technology, either entering the market or starting to graduate.</span>
            </p>
            </div>          
        );
    }
}

export default BiographyComponent;