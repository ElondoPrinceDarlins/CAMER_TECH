const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Mock Data
let clients = [];
let technicians = [];
let admins = [];
let serviceRequests = [];
let chatBoards = [];
let itBooks = [];
let ratings = [];

// Routes
app.get('/', (req , res) => {
    res.send('Welcome to the API');
});

// Client Routes
app.post('/client', (req, res) => {
    const client = req.body;
    clients.push(client);
    res.status(201).json(client);
});

app.get('/clients', (req, res) => {
    res.json(clients);
});

app.patch('/client/:id', (req, res) => {
    const { id } = req.params;
    const updatedClient = req.body;
    const clientIndex = clients.findIndex(client => client.idCard === id);

    if (clientIndex !== -1) {
        clients[clientIndex] = { ...clients[clientIndex], ...updatedClient };
        res.json(clients[clientIndex]);
    } else {
        res.status(404).json({ message: 'Client not found' });
    }
});

app.delete('/client/:id', (req, res) => {
    const { id } = req.params;
    const clientIndex = clients.findIndex(client => client.idCard === id);

    if (clientIndex !== -1) {
        const deletedClient = clients.splice(clientIndex, 1);
        res.json(deletedClient);
    } else {
        res.status(404).json({ message: 'Client not found' });
    }
});

app.post('/client/request-service', (req, res) => {
    const serviceRequest = req.body;
    serviceRequests.push(serviceRequest);
    res.status(201).json(serviceRequest);
});

// Technician Routes
app.post('/technician', (req, res) => {
    const technician = req.body;
    technicians.push(technician);
    res.status(201).json(technician);
});

app.get('/technicians', (req, res) => {
    res.json(technicians);
});

app.patch('/technician/:id', (req, res) => {
    const { id } = req.params;
    const updatedTechnician = req.body;
    const technicianIndex = technicians.findIndex(technician => technician.nationalId === id);

    if (technicianIndex !== -1) {
        technicians[technicianIndex] = { ...technicians[technicianIndex], ...updatedTechnician };
        res.json(technicians[technicianIndex]);
    } else {
        res.status(404).json({ message: 'Technician not found' });
    }
});

app.delete('/technician/:id', (req, res) => {
    const { id } = req.params;
    const technicianIndex = technicians.findIndex(technician => technician.nationalId === id);

    if (technicianIndex !== -1) {
        const deletedTechnician = technicians.splice(technicianIndex, 1);
        res.json(deletedTechnician);
    } else {
        res.status(404).json({ message: 'Technician not found' });
    }
});

app.post('/technician/respond-service', (req, res) => {
    const { requestId, technicianId } = req.body;
    const serviceRequest = serviceRequests.find(req => req.requestId === requestId);
    if (serviceRequest) {
        serviceRequest.assignedTo = technicianId;
        res.json(serviceRequest);
    } else {
        res.status(404).json({ message: 'Service Request not found' });
    }
});

// Admin Routes
app.post('/admin', (req, res) => {
    const admin = req.body;
    admins.push(admin);
    res.status(201).json(admin);
});

app.get('/admins', (req, res) => {
    res.json(admins);
});

app.patch('/admin/:id', (req, res) => {
    const { id } = req.params;
    const updatedAdmin = req.body;
    const adminIndex = admins.findIndex(admin => admin.adminId === id);

    if (adminIndex !== -1) {
        admins[adminIndex] = { ...admins[adminIndex], ...updatedAdmin };
        res.json(admins[adminIndex]);
    } else {
        res.status(404).json({ message: 'Admin not found' });
    }
});

app.delete('/admin/:id', (req, res) => {
    const { id } = req.params;
    const adminIndex = admins.findIndex(admin => admin.adminId === id);

    if (adminIndex !== -1) {
        const deletedAdmin = admins.splice(adminIndex, 1);
        res.json(deletedAdmin);
    } else {
        res.status(404).json({ message: 'Admin not found' });
    }
});

app.post('/admin/login', (req, res) => {
    const { adminId, name } = req.body;
    const admin = admins.find(adm => adm.adminId === adminId && adm.name === name);
    if (admin) {
        res.json({ message: 'Login successful', admin });
    } else {
        res.status(401).json({ message: 'Login failed' });
    }
});

app.post('/admin/update-profile', (req, res) => {
    const { adminId, newProfile } = req.body;
    const admin = admins.find(adm => adm.adminId === adminId);
    if (admin) {
        Object.assign(admin, newProfile);
        res.json(admin);
    } else {
        res.status(404).json({ message: 'Admin not found' });
    }
});

// IT Book Routes
app.post('/itbook', (req, res) => {
    const itBook = req.body;
    itBooks.push(itBook);
    res.status(201).json(itBook);
});

app.get('/itbooks', (req, res) => {
    res.json(itBooks);
});

// Service Request Routes
app.get('/service-requests', (req, res) => {
    res.json(serviceRequests);
});

// Chat Board Routes
app.post('/chat', (req, res) => {
    const chatMessage = req.body;
    chatBoards.push(chatMessage);
    res.status(201).json(chatMessage);
});

app.get('/chats', (req, res) => {
    res.json(chatBoards);
});

// Rating Routes
app.post('/rating', (req, res) => {
    const rating = req.body;
    ratings.push(rating);
    res.status(201).json(rating);
});

app.get('/ratings', (req, res) => {
    res.json(ratings);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});