export class Controller_Student {
    constructor(modelStudent) {
        this.modelStudent = modelStudent
    }
    getAll = async (req, res) => {
        res.json(await this.modelStudent.getAll())
    }
    getOneById = async (req, res) => {
        const id = req.params.id
        const data = await this.modelStudent.getAll(id)
        if (data) {
            return res.json(data)
        }
        return res.json({ message: "Student not found" })
    }
    createStudent = async (req, res) => {
        const data = req.body
        const newStudent = await this.modelStudent.createStudent(data)
        res.json(newStudent)
    }
    updateStudent = async (req, res) => {
        const id = req.params.id
        const data = req.body
        const update = await this.modelStudent.updateStudent(id, data)
        res.json(update)
    }
    deleteStudent = async (req, res) => {
        const id = req.params.id
        const data = await this.modelStudent.deleteStudent(id)
        res.json(data)
    }
}