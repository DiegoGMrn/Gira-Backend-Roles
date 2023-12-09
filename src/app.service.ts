import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { JwtService } from '@nestjs/jwt';
import { Roles } from './dtos/entity/roles.dto';




@Injectable()
export class AppService {
  constructor(@Inject('ROLES_SERVICE') private client: ClientProxy,
  @InjectRepository(Roles) private readonly rolesRepository: Repository<Roles>,private readonly jwtService: JwtService,){}
  
  
  
  

}


