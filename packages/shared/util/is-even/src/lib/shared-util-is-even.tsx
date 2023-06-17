import axios from 'axios';
import styles from './shared-util-is-even.module.css';

/* eslint-disable-next-line */
export interface SharedUtilIsEvenProps {}

const fetchData = async () => {
  const res = await axios.get('/api/shared-util-is-even');
  console.log(res.data);
};

export function SharedUtilIsEven(props: SharedUtilIsEvenProps) {
  return (
    <div className={styles['container']} onLoad={fetchData}>
      <h1>Welcome to SharedUtilIsEven!</h1>
    </div>
  );
}

export default SharedUtilIsEven;
