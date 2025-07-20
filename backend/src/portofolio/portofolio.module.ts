import { Module } from '@nestjs/common';
import { PortofolioService } from './portofolio.service';
import { PortofolioController } from './portofolio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portofolio } from './entities/portofolio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Portofolio])],
  controllers: [PortofolioController],
  providers: [PortofolioService],
})
export class PortofolioModule {}
