import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { Demo, DemoSchema } from './demos/schemas/demo.schema';

const seederFile = class seeder {};

seeder({
  imports: [
    MongooseModule.forRoot('DemoSchema'),
    MongooseModule.forFeature([{ name: Demo.name, schema: DemoSchema }]),
  ],
}).run([seederFile]);
