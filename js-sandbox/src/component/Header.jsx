import React, {Component} from "react";
import PropTypes from 'prop-types';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        // esto es destructuring = const + nombre = this.props/cualquier cosa de props que se llame links
        const { links } = this.props;

        return (
            <>
                <Navbar style={{backgroundColor: "#ffb3b3", height: "90px"}} light expand="md">
                    <NavbarBrand href="/">
                        <h3 style={{color: "black", fontWeight: "bold", padding: "20px"}}>
                            SARA'S PROJECT
                        </h3>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            {
                                links.map((link) => {
                                    return(
                                        <NavItem style={{marginLeft: "20px"}}>
                                            <NavLink href={link.link} style={{color: "black"}}>{link.label}</NavLink>
                                        </NavItem>
                                    )

                                })
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        )

    }
}


Header.propTypes = {
    links: PropTypes.array.isRequired
};

Header.defaultProps = {
    links: []
};