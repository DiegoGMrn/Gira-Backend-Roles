import { Controller,Logger  } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';



@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}


  @EventPattern('show_info_roles')
    async handleShowInfoProyecto(data: { correo: string }) {
      const { correo } = data;
      
      if (correo) {
        const resp = await this.appService.showInfoRoles(correo)
        return resp
      } else {
        console.error('Falta INFO.');
      }
    }

    
  
}

