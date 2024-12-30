import express from 'express'
import cors from 'cors'
import { PORT } from './config/serverConfig.js'
import connectDB from './config/dbConfig.js'
import appRoutes from './routes/appRoutes.js'

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", appRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
    connectDB()
})
