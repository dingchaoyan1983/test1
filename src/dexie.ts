import Dexie, { PromiseExtended, Table } from 'dexie';
import {
  QQResponse,
} from './ts.d';

class MyDexie extends Dexie {
  qqInfo!: Table<QQResponse>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      qqInfo: '++id, code, name, qq, qlogo'
    });
  }

  addQQInfo(qq: QQResponse) {
    return this.qqInfo.add(qq);
  }

  findQQInfo(qqNo: string): PromiseExtended<QQResponse | undefined> {
    return this.qqInfo.where({
      qq: qqNo
    }).first();
  }
};

export default new MyDexie();
