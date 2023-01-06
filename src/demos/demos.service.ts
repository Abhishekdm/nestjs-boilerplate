import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDemoDto } from './dto/create-demo.dto';
import { Demo, DemoDocument } from './schemas/demo.schema';

@Injectable()
export class DemosService {
      constructor(@InjectModel(Demo.name) private readonly DemoModel: Model<DemoDocument>) {}


}