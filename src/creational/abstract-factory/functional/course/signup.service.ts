import { Student } from '../student'

export function SignUpCourse(student: Student, courseName: string): string {
    student.courses.push(courseName)

    return courseName
}
