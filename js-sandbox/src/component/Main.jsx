import React, {Component} from 'react';
import Header from './Header';
import SideBar from "./SideBar";
import Article from "./Article";
import { Container, Row } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCaretRight, faCaretDown )

const myMenu = [
    {label:"Home",link: "/"},
    {label:"Contact",link: "#"},
    {label:"Shop", link: "#"}
];

const lorem = "Lorem Ipsum is simply dummy text of the printing and " +
    "typesetting industry. Lorem Ipsum has been the industry's " +
    "standard dummy text ever since the 1500s, when an unknown printer " +
    "took a galley of type and scrambled it to make a type specimen book. " +
    "It has survived not only five centuries, but also the leap into " +
    "electronic typesetting, remaining essentially unchanged. " +
    "It was popularised in the 1960s with the release of Letraset sheets " +
    "containing Lorem Ipsum passages, and more recently with " +
    "desktop publishing software like Aldus PageMaker including " +
    "versions of Lorem Ipsum.";

const myArticles = [
    {id: 0, title: "My first blog" ,content: lorem, image: "http://blog.enzocastillo.com/wp/wp-content/uploads/2018/03/blog2.jpg"},
    {id: 1,title: "My second blog" ,content: lorem, image: "https://dsim.in/blog/wp-content/uploads/2013/04/blog.jpg"},
    {id: 2,title: "My third blog" ,content: lorem, image: "http://www.graduatexxi.org/wp-content/uploads/2014/09/iStock_000015286795Medium.jpg"}
];

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleshow: 0
        }

        this.changeArticle = this.changeArticle.bind(this);
    }
    // funcion con un parametro "number" que se asignará en el estado "articleshow"
    changeArticle(number){
        this.setState({articleshow: number})
    }

    render() {
        return(
            <>

                <Header
                    links={myMenu}
                />
                <Container>
                    <Row>
                        <Article
                            articles={myArticles}
                            articleshow={this.state.articleshow}
                        />
                        <SideBar
                            buttons={myArticles}
                            changeArticle={this.changeArticle}
                        />
                    </Row>
                </Container>
            </>
        )
    }
};