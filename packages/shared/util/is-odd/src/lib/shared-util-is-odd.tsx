import axios from 'axios';
import styles from './shared-util-is-odd.module.css';

/* eslint-disable-next-line */
export interface SharedUtilIsOddProps {}

const fetchData = async () => {
  const res = await axios.get('/api/shared-util-is-even');
  console.log(res.data);
};

export function SharedUtilIsOdd(props: SharedUtilIsOddProps) {
  return (
    <div className={styles['container']} onLoad={fetchData}>
      <h1>Welcome to SharedUtilIsOdd!</h1>
    </div>
  );
}

export default SharedUtilIsOdd;
