const express = require('express')
const cors = require('cors')
const app = express()

const corsOptions = {
  origin: process.env.APP_URL
}

app.use(cors(corsOptions))

app.delete('/logout', (req, res) => {
  console.log('logout delete request')
  res.clearCookie('access_token', { path: '/' }).status(200).send('Ok.')
})

module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
