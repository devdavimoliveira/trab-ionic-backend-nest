import { Module } from '@nestjs/common';
import { CakesService } from './cakes.service';
import { CakesController } from './cakes.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  controllers: [CakesController],
  providers: [CakesService, PrismaService],
})
export class CakesModule {}
