import { User } from './user'
import { SignUpCourse } from './student/course/signup.service'

export interface Student extends User {
    courses: string[]

    signUpCourse(student: Student, courseName: string): string
}

export function NewStudent(id: string, email: string): Student {
    return {
        uniqueId: id,
        email: email,
        courses: [],
        signUpCourse: SignUpCourse,
    }
}
