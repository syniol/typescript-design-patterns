import { User } from './user'
import { CourseSignup } from './course/signup.service'

export class Student extends User {
    protected courses: string[] = [];
    private courseSignupService: CourseSignup

    public constructor(uniqueId: string, email: string) {
        super(uniqueId, email)

        this.courseSignupService = new CourseSignup(uniqueId, email)
    }

    public signUpCourse(course: string): string {
        return this.courseSignupService.signUp(course)
    }
}
