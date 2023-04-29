import s from './Error.module.css';
import { ReactComponent as Warning } from '../../assets/form/worning.svg';
const Error = () => {
  return (
    <div className={s.error}>
      <Warning />

      <p>This is required field</p>
    </div>
  );
};
export default Error;
