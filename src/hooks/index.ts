
import { useCallback, useState } from 'react';
import {
  OnSubmitFuncType,
  QQResponse,
} from '../ts.d';
import dexie from '../dexie';
import { get } from '../api';
import qqErrors from '../qq-errors';

interface UseQQInfoShape {
  (qq: string): {
    loading: boolean,
    qqResponse?: QQResponse,
    error?: Error,
    getQQInfo: OnSubmitFuncType,
  }
}

export const useQQInfo: UseQQInfoShape = (qq) => {
  // loading 状态
  const [loading, setLoading] = useState<boolean>(false);
  // 查询接口的返回
  const [qqResponse, setQQResponse] = useState<QQResponse>();
  // 查询接口的错误
  const [error, setError] = useState<Error>();
  /**
   * 查询QQ信息的操作
   * 优化了查询，如果已经查询过并成功返回数据，则缓存在indexeddb，以便下一次查询的时候直接返回，减少接口查询次数
   */
  const getQQInfo = useCallback<OnSubmitFuncType>(async (event) => {
    // 每次查询reset 状态
    setLoading(true);
    setError(undefined);
    setQQResponse(undefined);
    try {
      event.preventDefault();
      let qqInfo: QQResponse | undefined;
      qqInfo = await dexie.findQQInfo(qq);
      if(!qqInfo) {
        qqInfo = await get<QQResponse>(`https://api.uomg.com/api/qq.info?qq=${qq}`);
        const businessError = qqErrors[qqInfo.code];
        if (businessError) {
          throw businessError;
        }
        dexie.addQQInfo(qqInfo);
      }
      setQQResponse(qqInfo);
    } catch(e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, [qq])
  return {
    loading,
    qqResponse,
    getQQInfo,
    error,
  }
}