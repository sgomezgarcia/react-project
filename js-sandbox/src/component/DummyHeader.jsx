import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DummyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        /**
         * este estado cambia con el tiempo
         */
    }


    render() {
        const myData = this.props.data;
        console.log (myData);
        return <header className="row">
            <h1 className="col-md-12">
                {this.state.date.getDate()}
            </h1>
            <div className="col-md-12">
                {myData.map((o) => {
                   return <a key={o.label} href={o.link}>{o.label}</a>
                    }
                )}
            </div>
        </header>;
    }

    /**
     * render pinta
     */
}
DummyHeader.propTypes = {
    data: PropTypes.array.isRequired,
};

export default DummyHeader;