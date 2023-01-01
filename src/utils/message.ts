import { message } from 'antd';

export const successMsg = (msg?: string) => message.success(`${msg || '执行成功！'}`);

export const failMsg = (msg?: string) => message.success(`${msg || '执行失败！'}`);

export const warnningMsg = (msg: string) => message.success(`${msg}`);
