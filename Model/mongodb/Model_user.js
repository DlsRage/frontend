import { Connection } from "./conexion.js";
import { Schema, model } from "mongoose";
import { ObjectId } from 'mongodb'

Connection()

const studentSchema = new Schema(
    {
        name: String,
        age: Number,
        average: Number,
        scholarship: Number
    },
    {
        versionKey: false
    }
)

const studentCollection = new model('Student', studentSchema)

export class Student {
    static async getAll(id) {
        if (!id) return await studentCollection.find()
        return await studentCollection.find({ _id: id })
    }
    static async createStudent(student) {
        const newStudent = new studentCollection(student)
        return await newStudent.save()
    }
    static async updateStudent(id, updStudent) {
        console.log(id)
        const objectId = new ObjectId(id);
        const updateStudent = studentCollection.findOneAndUpdate(
            { _id: objectId },
            { $set: updStudent },
            { new: true }
        )
        return updateStudent
    }
    static async deleteStudent(id) {
        return await studentCollection.findOneAndDelete({ _id: id })
    }
}