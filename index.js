const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my own smarty smarty  Pant!!')
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

const users = [
    { id: 1, name: 'Shabana', email: 'shabana@gmail.com', phone: '0171828238' },
    { id: 2, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: '0171828238' },
    { id: 3, name: 'Bobita', email: 'bobita@gmail.com', phone: '0171828238' },
    { id: 4, name: 'Olivia', email: 'olivia@gmail.com', phone: '0171828238' },
    { id: 5, name: 'jony', email: 'jony@gmail.com', phone: '0171828238' },
    { id: 6, name: 'Alamgir', email: 'alamgir123@gmail.com', phone: '0171828238' },
    { id: 7, name: 'Kobita', email: 'kobita3324@gmail.com', phone: '0171828238' },
    { id: 8, name: 'ali hossain', email: 'alihossain55@gmail.com', phone: '0171828238' },
]

app.get('/users', (req, res) => {
    // res.send({id:1, name:'abdul alim', job:'khai sudhu halim'});
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    } else {
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    // const user = users[id];
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.listen(port, () => {
    console.log('listening to port', port);
});
