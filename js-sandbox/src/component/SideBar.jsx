import React, {Component} from "react";
import { Col, Button, Collapse } from 'reactstrap';


export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }
    render() {
        const { buttons, changeArticle } =  this.props;
        return (
            <Col xs="3" style={{padding: "0px"}}>
                <div style={{background: "#ffcccc", height: "100%", textAlign: 'center'}}>
                    <Button color="info" onClick={this.toggle} style={{ margin: '10px', marginTop: "70px" }}>Blogs</Button>
                    <Collapse isOpen={this.state.collapse}>
                    {
                        buttons.map ((button) => {
                            let id = button.id;
                                return(
                                    <div style={{padding: "20px", textAlign: "center"}}>
                                        <Button onClick={() => changeArticle(id)} color="info">{button.title}</Button>
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