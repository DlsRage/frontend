import { Router } from "express";
import { Controller_Student } from "../Controller/Controller_student.js"; 
export const RoutesStudents = (Student) =>{
    const routes = Router()
    const modelStudent = new Controller_Student(Student)
    routes.get('/',modelStudent.getAll)
    routes.get('/:id',modelStudent.getOneById)
    routes.post('/',modelStudent.createStudent)
    routes.put('/:id',modelStudent.updateStudent)
    routes.delete('/:id',modelStudent.deleteStudent)
    return routes
}