import { User } from './user'
import { SignUpCourse } from './course/signup.service'

export interface Student extends User {
    courses: string[]

    signUpCourse(student: Student, courseName: string): string
}

export function NewStudent(user: User): Student {
    return {
        uniqueId: user.uniqueId,
        email: user.email,
        courses: [],
        signUpCourse: SignUpCourse,
    }
}
