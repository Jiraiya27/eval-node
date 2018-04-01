const express = require('express')
const bodyParser = require('body-parser')
const { handleEval } = require('./questions')
const questions = require('./data').questions
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('port', process.env.PORT || 4000)
app.use(cors())

app.post('/eval', (req, res) => {
  const code = req.body.code || ''
  const question = req.body.question || ''
  const response = handleEval(code, question)
  console.log('Response:', response)
  return res.json(response)
})

app.get('/questions', (req, res) => {
  return res.json({ questions })
})

app.listen(app.get('port'), () => {
  console.log(`Application listening on port: ${app.get('port')}`)
})