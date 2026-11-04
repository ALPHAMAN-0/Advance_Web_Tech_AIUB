import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';
import { Faculty } from './entities/faculty.entity.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepo: Repository<Faculty>,
  ) {}

  async create(dto: CreateFacultyDto): Promise<Faculty> {
    const exists = await this.facultyRepo.existsBy({ id: dto.Id });
    if (exists) {
      throw new ConflictException(`Faculty with Id ${dto.Id} already exists`);
    }

    const faculty = this.facultyRepo.create({
      id: dto.Id,
      name: dto.Name,
      expertise: dto.expertise,
      noOfPublication: dto.noOfPublication,
    });

    return this.facultyRepo.save(faculty);
  }
}