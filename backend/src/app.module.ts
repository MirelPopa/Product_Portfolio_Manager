import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { PortofolioModule } from './portofolio/portofolio.module';
import { Portofolio } from './portofolio/entities/portofolio.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data.db',
      entities: [Product, Portofolio],
      synchronize: true, // ⚠️ Use only for dev
    }),
    ProductModule,
    PortofolioModule,
  ],
})
export class AppModule {}
