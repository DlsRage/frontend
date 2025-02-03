import students from "../../Data/students.js";

let studensBase = students
export class Student {
    static async getAll(id){
        if(!id) return studensBase
        return studensBase.find(student => student.id == id)
    }
    static async createStudent(newStudent){
        const id = studensBase.length
        const studentNew = {
            id : id,
            ...newStudent
        }
        studensBase.push(studentNew)
        return studentNew
    }
    static async updateStudent(id, dataStudent){
        const index = studensBase.findIndex(student => student.id == id)
        if(index == -1) return {message: "Student not found"}
        const updateStudent = {
            ...studensBase[index],
            ...dataStudent
        }
        studensBase[index] = updateStudent
        return updateStudent
    }
    static async deleteStudent(id){
        studensBase = studensBase.filter(student => student.id != id)
        return studensBase
    }
}