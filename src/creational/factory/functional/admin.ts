import { User } from './user'
import { Student } from './student'
import { SignUpCourse } from './student/course/signup.service'
import { RegisterStudent } from './admin/register.service'

export interface Admin extends User, Student {
    students: Student[]

    registerStudent(Admin: Admin, student: Student): Promise<any>
}

export function NewAdmin(id: string, email: string): Admin {
    return {
        students: [],
        courses: [],
        uniqueId: id,
        email: email,
        registerStudent: RegisterStudent,
        signUpCourse: SignUpCourse,
    }
}
