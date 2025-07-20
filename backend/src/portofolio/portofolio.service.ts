import { Injectable } from '@nestjs/common';
import { CreatePortofolioDto } from './dto/create-portofolio.dto';
import { UpdatePortofolioDto } from './dto/update-portofolio.dto';

@Injectable()
export class PortofolioService {
  create(createPortofolioDto: CreatePortofolioDto) {
    return 'This action adds a new portofolio';
  }

  findAll() {
    return `This action returns all portofolio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} portofolio`;
  }

  update(id: number, updatePortofolioDto: UpdatePortofolioDto) {
    return `This action updates a #${id} portofolio`;
  }

  remove(id: number) {
    return `This action removes a #${id} portofolio`;
  }
}
