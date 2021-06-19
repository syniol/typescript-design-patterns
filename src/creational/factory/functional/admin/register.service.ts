import { Student } from '../student'
import { Admin } from '../admin'

export async function RegisterStudent(
    admin: Admin,
    student: Student
): Promise<Student> {
    admin.students.push(student)

    return student
}
