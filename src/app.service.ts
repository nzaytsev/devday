import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      body: 'app-server',
      autodeploy: 'yep',
    };
  }
  checkStatus() {
    return null;
  }
}
