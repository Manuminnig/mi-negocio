import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Producto } from './productos/entities/producto.entity';
import { ProductosModule } from './productos/productos.module';
import { OfertasModule } from './ofertas/ofertas.module';
import { Oferta } from './ofertas/entities/oferta.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Producto, Oferta],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      }
    }),
    ProductosModule,
    OfertasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
