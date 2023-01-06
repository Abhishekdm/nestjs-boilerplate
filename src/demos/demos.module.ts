import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DemosController } from './demos.controller';
import { DemosService } from './demos.service';
import { Demo, DemoSchema } from './schemas/demo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Demo.name, schema: DemoSchema }])],
  controllers: [DemosController],
  providers: [DemosService],
})
export class DemosModule {}