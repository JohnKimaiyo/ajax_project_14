const { Router } = require('express');
const express = require('express');
const router = express.Router();

// employee data
let employees = [
    {
        id: '_a',
        first_name: 'john',
        last_name: 'wilson',
        email: 'john@gmail',
        gender: 'male',
        ip_address: '127.0.0.1'
    },
    {
        id: '_b',
        first_name: 'janet',
        last_name: 'wilson',
        email: 'janet@gmail',
        gender: 'female',
        ip_address: '127.0.0.1'
    }
];

// get id
let getID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// get employee
router.get('/employee', (reequest, response) => {
    response.json(employees);
});

// post request
router.post('/employess', (request, response) => {
    let employee = {
        id: getID(),
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        gender: request.body.gender,
        ip_address: request.body.ip_address
    }
    employee.push(employee);
    console.log(`POST request received at server ..${new Date().toLocale()}`);
    response.json(emoployee);
});

// put reqeusts
router.put('/employees/:id', (request, response) => {
    let empID = request.params.id;
    let updateEmployee = {
        id: empID,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.gender,
        ip_address: request.body.ip_adddress
    };
    let existingEmployee = employees.find((employee) => {
        return employee.id === empID,
        });
    employees.splice(employee.indexOf(existingEmployee), 1, updateEmployee);
    console.log(`PUT request received at server ..${new Date().toLacaleTimeString()}`);
    response.json({ msg: 'PUT request is success' });
});

// delet request
router.delete('/emplotyees/:id', (request, response) => {
    let empId = request.params.id;
    employees = employees.filter((employee) => {
        return employee.id !== empId;
    });
    console.log(`delete request received at server .. ${new Date().toLacaleTimeString()}`);
    response.json({ msg: 'delete request is a success' });
});

module.exports = router;