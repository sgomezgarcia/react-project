import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapTable from 'bootstrap-react-table';
import { Button, Table } from 'reactstrap';


const title = "Hello";
let myData = ["pepito", "joselito", "juanito", "ito"];
let myComplexData = [
    {name: "Sara", surname: "gomez"},
    {name: "Sara1", surname: "gomez1"},
    {name: "Sara2", surname: "gomez2"},
    {name: "Sara3", surname: "gomez3"}
];
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
        <h1>{title}</h1>,
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
                <BootstrapTable
                    columns={columns}
                    data={data}/>
            </div>
        </table>
    </div>

    , document.getElementById('app')
);


