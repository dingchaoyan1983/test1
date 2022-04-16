import React, {
  useCallback,
  useState,
} from 'react';
import QQInfoCard from '../qq-info-card';
import styles from './index.module.css';
import {
  OnChangeFuncType,
} from '../../ts.d';
import { useQQInfo } from '../../hooks';

const QQInfoQuery: React.FC = () => {
  const [qq, setQQ] = useState<string>('');
  const onChangeQQ = useCallback<OnChangeFuncType>((e) => {
    setQQ(e.target.value);
  }, []);
  const {
    qqResponse,
    error,
    loading,
    getQQInfo,
  } = useQQInfo(qq);

  return (
    <div>
      <form onSubmit={getQQInfo} className={styles.QueryInput}>
        QQ: <input className={styles.QQInput} onChange={onChangeQQ}/>
      </form>
      {
        loading
        ? 'loading'
        : (
          <>
            {
              qqResponse && (
                <QQInfoCard
                  avatar={qqResponse.qlogo}
                  name={qqResponse.name}
                  qqNo={qqResponse.qq}
                />
              )
            }
            {
              error && error.toString()
            }
          </>
        )
      }
    </div>
  );
}

export default QQInfoQuery;