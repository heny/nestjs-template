import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getList(): BaseObject {
    return { name: 'hhh', age: 18, city: '北京' };
  }
}
