import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Table } from 'reactstrap';
import MyTableComponent from './component/MyTableComponent';
import NewTableComponent from "./component/NewTableComponent";


const title = "Hello";
let myData = ["pepito", "joselito", "juanito", "ito"];
let myComplexData = [
    {name: "Sara", surname: "gomez"},
    {name: "Sara1", surname: "gomez1"},
    {name: "Sara2", surname: "gomez2"},
    {name: "Sara3", surname: "gomez3"}
];

function alertAction(mensaje) {
    alert(mensaje);
}

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
ReactDOM.render(
    <div className="container">
        <h1>{title}</h1>
        <MyTableComponent/>
        <ul>
            <li>yuhu</li>
            {myData.map((v) =>
                <li>{v}</li>
            )}
        </ul>
        <table>
            <thead>
            <tr>
                <th>name</th>
                <th>surname</th>
            </tr>
            </thead>
            <tbody>
            {myComplexData.map((item) =>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                </tr>
            )}
            </tbody>
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Sara</td>
                        <td>Gomez</td>
                        <td>
                            <Button
                                color={"info"}
                                onClick={
                                    ()=>{alertAction("ok?")}
                                }>
                                @sgg
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </table>

        <NewTableComponent
        prueba={"estoesunaprueba"}
        buttonLabel={"show table"}
        />
    </div>

    , document.getElementById('app')
);


