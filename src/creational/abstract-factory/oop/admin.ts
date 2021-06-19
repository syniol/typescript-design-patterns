import { User } from './user'
import { CourseSignup } from './course/signup.service'
import { Student } from './student'

export class Admin extends User {
    private readonly courseSignupService
    protected students: Student[] = []

    public constructor(uniqueId: string, email: string) {
        super(uniqueId, email)

        this.courseSignupService = new CourseSignup(uniqueId, email)
    }

    public signUpCourse(course: string) {
        return this.courseSignupService.signUp(course)
    }
}
