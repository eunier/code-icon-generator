import { Injectable } from '@nestjs/common';

@Injectable ()
export class AppService {
  constructor (private readonly _http: HttpServi){}
  getData (): { message: string } {
    return { message: 'Hello API' };
  }

  getIcons (): unknown {
    return ''
  }
}
