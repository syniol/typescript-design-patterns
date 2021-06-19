import { Student } from '../student'
import { Admin } from '../admin'

export class RegisterService extends Admin {
    registerStudent(student: Student): Student {
        this.students.push(student)

        return student
    }
}
