const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Brother Whats Up.Do you Live ALone? i want to spend some times with you. I feel so hot');
});

const users = [
    { id: 1, name: 'jhon wick', email: 'jhonwick@gmail.com', phone: '0175000256' },
    { id: 2, name: 'adams wick', email: 'adams@gmail.com', phone: '0175055256' },
    { id: 3, name: 'rockwin', email: 'rockwin@gmail.com', phone: '0175682255' },
    { id: 4, name: 'tom hanks', email: 'tomhanks@gmail.com', phone: '01852552432' },
    { id: 5, name: 'leo de cap', email: 'leodecap@gmail.com', phone: '0192452752' },
    { id: 6, name: 'will smith', email: 'willsmith@gmail.com', phone: '01652536523' },
    { id: 7, name: 'tony stark', email: 'tonystark@gmail.com', phone: '01754488386' },
]

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('requist', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'bannana'])
})

app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    } else {
        res.send(users)

    }
})

app.listen(port, () => {
    console.log('listening to port', port)
})