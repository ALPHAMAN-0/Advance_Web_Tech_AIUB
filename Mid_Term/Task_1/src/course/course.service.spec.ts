import { Test, TestingModule } from '@nestjs/testing';
import { CourseService } from './course.service.js';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseService],
    }).compile();

    service = module.get<CourseService>(CourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getAllCourses returns the expected string', () => {
    expect(service.getAllCourses()).toBe('Get All Courses - from Service');
  });

  it('getCourseById returns the expected string', () => {
    expect(service.getCourseById('10')).toBe(
      'Get Course with ID: 10 - from Service',
    );
  });

  it('createCourse returns the expected string', () => {
    expect(service.createCourse()).toBe('Create Course - from Service');
  });

  it('updateCourse returns the expected string', () => {
    expect(service.updateCourse('10')).toBe('Update Course 10 - from Service');
  });

  it('patchCourse returns the expected string', () => {
    expect(service.patchCourse('10')).toBe('Patch Course 10 - from Service');
  });

  it('deleteCourse returns the expected string', () => {
    expect(service.deleteCourse('10')).toBe('Delete Course 10 - from Service');
  });
});
