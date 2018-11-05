import React, {Component} from 'react';
import {Card,CardHeader,CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './profile.css';

class ProfileComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false,
          expanded4: false

        };
    }

    //definição para abrir e fechar o card
    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpandChange4 = (expanded4) => {
        this.setState({expanded4: expanded4});
      };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleExpand4 = () => {
        this.setState({expanded4: true});
      };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };

    handleReduce4 = () => {
        this.setState({expanded4: false});
    };

    render() {
        return (
            <div className="profile">
              {/*titulo antes do card */}
              <p className="headline">Profile</p>
                <div className="profile-entry">
                  {/*titulo do card*/}
                  <Card>
                      <CardHeader title="Analysis and Systems Development" subtitle="Student"/>
                  </Card>
                </div>
                {/*definição do card de interesse */}
                  <div className="profile-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Interests" actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                              <div className="profile-entries">
                                <div className="profile-entry-chip">
                                  <Chip>React</Chip>
                                </div>
                                <div className="profile-entry-chip">
                                  <Chip>Angular</Chip>
                                </div>
                                <div className="profile-entry-chip">
                                  <Chip>Big Data</Chip>
                                </div>
                                <div className="profile-entry-chip">
                                  <Chip>Internet of Things, IoT</Chip>
                                </div>
                                <div className="profile-entry-chip">
                                  <Chip>Machine Learning</Chip>
                                </div>
                                <div className="profile-entry-chip">
                                  <Chip>Computer Network</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  {/* definição do card de linguagens*/}
                  <div className="profile-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="Languages" actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          <div className="profile-entries">
                            <div className="profile-entry-chip">
                              <Chip>Portuguese - Native</Chip>
                            </div>
                            <div className="profile-entry-chip">
                              <Chip>English - Intermediary</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                {/* definição do card de formação*/}
                <div className="profile-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Formation" actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          <div className="profile-entries">
                            <div className="profile-entry-chip">
                              <Chip>Elementary School - Flora Prestes Cesar</Chip>
                            </div>
                            <div className="profile-entry-chip">
                              <Chip>High School - ETEC Prof. Edson Galvão</Chip>
                            </div>
                            <div className="profile-entry-chip">
                              <Chip>Technical Course - Instituto Federal de São Paulo</Chip>
                            </div>
                            <div className="profile-entry-chip">
                              <Chip>Higher Education - UTFPR</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                {/* definição do card de atividades*/}
                <div className="profile-entry">
                  <Card expanded={this.state.expanded4} onExpandChange={this.handleExpandChange4}>
                      <CardHeader title="Activities" actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          <div className="profile-entries">
                            <div className="profile-entry-chip">
                              <Chip>Web Systems Development</Chip>
                            </div>
                            <div className="profile-entry-chip">
                              <Chip>Front End Development</Chip>
                            </div>
                            <div className="profile-entry-chip">
                              <Chip>Back End Development</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default ProfileComponent;
