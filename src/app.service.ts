import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { body: 'app-server', env: '' + process.env.environment };
  }
  checkStatus() {
    return null;
  }
}
