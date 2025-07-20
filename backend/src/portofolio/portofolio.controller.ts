import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PortofolioService } from './portofolio.service';
import { CreatePortofolioDto } from './dto/create-portofolio.dto';
import { UpdatePortofolioDto } from './dto/update-portofolio.dto';

@Controller('portofolio')
export class PortofolioController {
  constructor(private readonly portofolioService: PortofolioService) {}

  @Post()
  create(@Body() createPortofolioDto: CreatePortofolioDto) {
    return this.portofolioService.create(createPortofolioDto);
  }

  @Get()
  findAll() {
    return this.portofolioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.portofolioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePortofolioDto: UpdatePortofolioDto) {
    return this.portofolioService.update(+id, updatePortofolioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.portofolioService.remove(+id);
  }
}
