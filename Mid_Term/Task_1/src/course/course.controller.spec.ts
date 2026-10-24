import { Test, TestingModule } from '@nestjs/testing';
import { CourseController } from './course.controller.js';
import { CourseService } from './course.service.js';

describe('CourseController', () => {
  let controller: CourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseController],
      providers: [CourseService],
    }).compile();

    controller = module.get<CourseController>(CourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('delegates every route to the service', () => {
    expect(controller.getAllCourses()).toBe('Get All Courses - from Service');
    expect(controller.getCourseById('5')).toBe(
      'Get Course with ID: 5 - from Service',
    );
    expect(controller.createCourse()).toBe('Create Course - from Service');
    expect(controller.updateCourse('5')).toBe('Update Course 5 - from Service');
    expect(controller.patchCourse('5')).toBe('Patch Course 5 - from Service');
    expect(controller.deleteCourse('5')).toBe('Delete Course 5 - from Service');
  });
});
