import { User } from './user'
import { Student } from './student'
import { SignUpCourse } from './course/signup.service'
import { RegisterStudent } from './student/register.service'

export interface Admin extends User, Student {
    students: Student[]

    registerStudent(Admin: Admin, student: Student): Promise<any>
}

export function NewAdmin(user: User): Admin {
    return {
        students: [],
        courses: [],
        uniqueId: user.uniqueId,
        email: user.email,
        registerStudent: RegisterStudent,
        signUpCourse: SignUpCourse,
    }
}
