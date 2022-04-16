import {
  ChangeEvent,
  FormEvent,
} from 'react';
export interface QQInforCardProps {
  avatar: string,
  name: string,
  qqNo: string,
}

export interface QQResponse {
  code: number,
  name: string,
  qlogo: string,
  qq: string,
  [key: string]: any
};

// onSubmit事件的type
export interface OnSubmitFuncType {
  (e: FormEvent<HTMLFormElement>): void
};

// onChange事件的type
export interface OnChangeFuncType {
  (e: ChangeEvent<HTMLInputElement>): void
}
