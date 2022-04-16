import React, {
  useCallback,
  useState,
} from 'react';
import { BounceLoader } from "react-spinners";
import QQInfoCard from '../qq-info-card';
import Error from '../error';
import styles from './index.module.css';
import {
  OnChangeFuncType,
} from '../../ts.d';
import { useQQInfo } from '../../hooks';

const QQInfoQuery: React.FC = () => {
  const [qq, setQQ] = useState<string>('');
  const onChangeQQ = useCallback<OnChangeFuncType>((e) => {
    console.log(e.target.value);
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
        ? <BounceLoader loading={loading} color="#0170fe" size={50} />
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
              error && <Error error={error} />
            }
          </>
        )
      }
    </div>
  );
}

export default QQInfoQuery;