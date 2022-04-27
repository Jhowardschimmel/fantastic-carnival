const express = require('express')
const mysql = require('mysql2')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'MootMoot86!',
        database: 'characters_db'
    },
    console.log(`Connected to database!`)
)


app.get('/api/characters', (req, res) => {
    const charactersQuery = 'SELECT * FROM characters'
    db.query(charactersQuery, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message })
            return 
        }
        res.json(rows)
    })
})

app.get('/api/character/:id', (req, res) => {
    const characterQuery = 'SELECT * FROM characters where id = ?'
    db.query(characterQuery, [req.params.id], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message })
            return 
        }
        res.json(rows)
    })
})

// app.post('/api/character', (req, res) => {
//     const insert = 'INSERT INTO characters(name, class, race) VALUES (?,?,?)'
// })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });