import React from 'react';
import styles from './index.module.css';
import {
  QQInforCardProps
} from '../../ts.d';

const QQInfoCard: React.FC<QQInforCardProps> = ({
  avatar,
  name,
  qqNo,
}) => {
  return (
    <div className={styles.Root}>
      <img className={styles.Avatar} src={avatar} alt="avatar" />
      <div>
        <div>{name}</div>
        <div className={styles.No}>{qqNo}</div>
      </div>
    </div>
  );
}

export default QQInfoCard;