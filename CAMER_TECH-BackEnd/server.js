const express =require('express');
const bodyParser =require('bodyParser');
const cors =require('cors');

const app =express();

app.use(bodyParser.jason());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Mock Data
let clients = [];
let technitians = [];
let admins = [];
let serveiceRequests = [];
let chatBoards = [];
let itBooks = [];
let ratings = [];

// Routes
app.post('/', (req, res) => {
    res.send('Welcome to the API');
});

// Client Routes
app.post('/client', (req, res) => {
    const client =req.body;
    clients.push(client);
    res.status(201).json(client);
})

app.get('/client', (req, res) =>{
    res.json(clients);
})

app.patch('.client/:id', (req, res) =>{
    
})
