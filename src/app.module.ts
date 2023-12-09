import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtModule } from '@nestjs/jwt'; // Asegúrate de importar JwtModule
import { Roles } from './dtos/entity/roles.dto';






@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ROLES_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'roles_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'silly.db.elephantsql.com',
      port: 5432,
      username: 'uljeiodc',
      password: 'm9gMvEeshKDjTH6_Mn4MGb1fbWX3OUtc',
      database: 'uljeiodc',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Roles]),
    JwtModule.register({
      secret: 'tu_clave_secreta', // Remplaza con tu clave secreta real
      signOptions: { expiresIn: '1h' }, // Opciones de firma del token
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}