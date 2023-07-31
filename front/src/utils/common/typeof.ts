import { EnumDataType } from '@/enum'



export function isFunction<T extends (...args: any[]) => any | void | never>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EnumDataType.funtion;
}