import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DemosService } from './demos.service'; 
import { CreateDemoDto } from './dto/create-demo.dto'; 
import { Demo } from './schemas/demo.schema';

@Controller("demos")
export class DemosController {
    constructor(private readonly demosService: DemosService) {}

}