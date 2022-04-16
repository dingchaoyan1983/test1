import React from 'react';
import styles from './index.module.css';

const Error: React.FC<{ error?: Error }> = ({ error }) => error ? (<span className={styles.Root}>{error.message}</span>) : null;

export default Error;