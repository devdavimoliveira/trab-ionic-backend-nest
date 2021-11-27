import { Module } from '@nestjs/common';
import { CakesModule } from './cakes/cakes.module';

@Module({
  imports: [CakesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
