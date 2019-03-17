import React, {Component} from 'react';
import BootstrapTable from 'bootstrap-react-table';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const columns = [
    {
        id: 'position',
        name: '#',
        first: true,
    },
    {
        id: 'name',
        name: 'Name'
    },
    {
        id: 'quantity',
        name: 'Quantity'
    }
];

const data = [
    {
        position: 1,
        name: 'Black shoes',
        quantity: 12
    }
];

class NewTableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            show: false
        };

        this.showTable=this.showTable.bind(this);
    }

    showTable(){
        this.setState({show: !this.state.show})
    }

    doSomething(){
        alert("fuck off")
    };

    render() {
        return (
            <React.Fragment>
                <Button color="danger" onClick={this.showTable}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.show} toggle={this.showTable} className={this.props.className}>
                    <ModalHeader toggle={this.showTable}>Modal title</ModalHeader>
                    <ModalBody>
                        <React.Fragment>
                            <BootstrapTable
                                columns={columns}
                                data={data}
                                visible={this.state.show}
                            />
                            <h2>{this.props.prueba}</h2>
                        </React.Fragment>                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.doSomething}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.showTable}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>


    );

    }
}

export default NewTableComponent;


