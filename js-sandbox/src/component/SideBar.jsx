import React, {Component} from "react";
import { Col, Button, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from "prop-types";



export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        const { buttons, changeArticle } =  this.props;
        const isCollapsed = this.state.collapse;
        const classIcon = isCollapsed?"caret-down":"caret-right";
        return (
            <Col xs="3" style={{padding: "0px"}}>
                <div style={{background: "#ffcccc", height: "100%", textAlign: 'center'}}>
                    <Button color="info" onClick={this.toggle} style={{ margin: '10px', marginTop: "70px" }}>
                        Blogs&#160;<FontAwesomeIcon icon={classIcon} />
{/*


                        {
                            !this.state.collapse &&
                            <>
                                {"  "} <FontAwesomeIcon icon="caret-right" />
                            </>
                        }
                        {
                            this.state.collapse &&
                            <>
                                {"  "} <FontAwesomeIcon icon="caret-down" />
                            </>
                        }

*/}
                    </Button>
                    <Collapse isOpen={this.state.collapse}>
                        {
                            buttons.map ((button) => {
                                    return(
                                        <div style={{padding: "20px", textAlign: "center"}}>
                                            <Button onClick={() => changeArticle(button.id)} color="info">{button.title}</Button>
                                        </div>
                                    )
                                }
                            )
                        }
                    </Collapse>
                </div>
            </Col>


        )

    }
}

SideBar.propTypes = {
    buttons: PropTypes.array.isRequired,
    changeArticle: PropTypes.func.isRequired
};

SideBar.defaultProps = {
    buttons: []
};