import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateCakeDto } from './dto/create-cake.dto';
import { UpdateCakeDto } from './dto/update-cake.dto';

@Injectable()
export class CakesService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateCakeDto) {
    return this.prisma.cake.create({ data });
  }

  findAll() {
    return this.prisma.cake.findMany();
  }

  findOne(id: number) {
    return this.prisma.cake.findUnique({
      where: { id },
    });
  }

  findBySlug(slug: string) {
    return this.prisma.cake.findFirst({
      where: { slug },
    });
  }

  update(id: number, data: UpdateCakeDto) {
    return this.prisma.cake.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.cake.delete({
      where: { id },
    });
  }
}
