import express from 'express'
//import { Student } from './Model/file-system/ModelStudents.js'
import { Student } from './Model/mongodb/Model_user.js'
import { RoutesStudents } from './Routes/RouteStudent.js'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.use('/api/students', RoutesStudents(Student))

const PORT = process.env.PORT ?? 4000

app.listen(PORT, () => {
    console.log(`Server is up and running http://localhost:${PORT}`)
})