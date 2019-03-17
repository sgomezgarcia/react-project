import React, {Component} from "react";
import { Col } from 'reactstrap';

export default class Article extends Component {
    render() {
        const { articles, articleshow } =  this.props;
        return (
            <Col md="9" style={{padding: "0px"}}>
                <div style={{background: "#ffe6e6", height: "100%", textAlign: "center"}}>
                    {
                        <>
                            <h2 style={{padding: "15px", fontWeight: "bold"}}>
                                {articles[articleshow].title}
                            </h2>
                            <img src={articles[articleshow].image} alt="error de carga" style={{height: "200px", width: "auto"}}/>
                            <p style={{margin: "20px", marginBottom: "40px"}}>{articles[articleshow].content} </p>
                        </>

                    }
                </div>

            </Col>
        )

    }
}