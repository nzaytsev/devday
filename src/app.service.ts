import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      body: 'app-server',
      env: '' + process.env.environment,
      autodeploy: 'yep',
    };
  }
  checkStatus() {
    return null;
  }
}
