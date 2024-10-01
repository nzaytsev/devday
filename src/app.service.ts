import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      body: 'app-server',
      autodeploy: 'yep.2',
      morefield: 123456,
    };
  }
  checkStatus() {
    return null;
  }
}
