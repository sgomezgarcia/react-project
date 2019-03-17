import React, {Component} from 'react';

class MyTableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        /**
         * el estado cambia con el tiempo
         */
    }

    componentDidMount() {

    }

    render() {
        const customDate=this.state.date.toISOString();
        return (
            <div className="container">
                Toma componente basico, toma toma
            </div>
        );
    }

    /**
     * render te pinta lo que constructor declara
     */
}

export default MyTableComponent;