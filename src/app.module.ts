import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DemosModule } from './demos/demos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:8000/demo'),
    DemosModule,
  ],
})
export class AppModule {}
