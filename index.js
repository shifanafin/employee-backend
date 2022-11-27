
const express = require("express")
var cors = require('cors')
const bodyParser = require("body-parser")
// const boxStore = require('./atlas')
const mongoUser=require('./mongoose')
const departmentUser=require('./department')
const employeeUser=require('./employee')
const updateUser=require('./updates')
const AdminDepartForm=require('./departmentForm')
const HREmployeeForm=require('./HrEmployeeForm')



const app = express()

app.use(bodyParser.json())
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header('Access-Control-Allow-Headers', '*')  
    next();
  });

// app.post('/products',boxStore.createProduct);
// app.get('/products',boxStore.getProduct);
app.post('/adminLogin',mongoUser.createUser)
app.get('/adminLogin',mongoUser.getUser);
app.post('/departmentLogin',departmentUser.createUser)
app.get('/departmentLogin',departmentUser.getUser);
app.post('/employeeLogin',employeeUser.createUser)
app.get('/employeeLogin',employeeUser.getUser);
app.post('/updatesData',updateUser.createUser)
app.get('/updatesData',updateUser.getUser);
app.delete('/updatesData/_id',updateUser.deleteUser);
app.post('/departForm',AdminDepartForm.createUser)
app.get('/departForm',AdminDepartForm.getUser);
app.post('/HrEmployeeForm',HREmployeeForm.createUser)
app.get('/HrEmployeeForm',HREmployeeForm.getUser);
app.listen(3005)