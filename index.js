const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('<h1> SO IT BEGINS </h1>')
})

app.listen(8080, () => {
  console.log('Example app listening at 8080')
})
