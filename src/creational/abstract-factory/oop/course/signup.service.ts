import { Student } from '../student'

export class CourseSignup extends Student {
    public signUp(course: string): string {
        this.courses.push(course);

        return course;
    }
}
