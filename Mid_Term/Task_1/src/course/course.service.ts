import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
 getCourseById(id: string): string {
 return `Course with ID ${id} has been retrieved.`;
 }

 createCourse(): string {
 return 'A new course has been successfully created.';
 }

 updateCourse(): string {
 return 'The course details have been updated.';
 }

 deleteCourse(): string {
 return 'The course has been successfully deleted.';
 }
}
