import { useEffect, useState, type FC } from 'react';
import styles from './Toast.module.css';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | '';
  onClose: () => void;
}

const Toast: FC<ToastProps> = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (type) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 400);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [type, message, onClose]);

  if (!type) return null;

  return (
    <div className={`${styles.toast} ${styles[type]} ${visible ? styles.show : styles.hide}`}
         role="alert"
         aria-live="polite">
      <div className={styles.icon}>
        {type === 'success'
          ? <i className="fa-solid fa-circle-check" aria-hidden="true" />
          : <i className="fa-solid fa-circle-xmark" aria-hidden="true" />}
      </div>
      <div className={styles.content}>
        <p className={styles.title}>
          {type === 'success' ? 'Message Sent!' : 'Something went wrong'}
        </p>
        <p className={styles.msg}>{message}</p>
      </div>
      <button className={styles.close} onClick={() => { setVisible(false); setTimeout(onClose, 400); }}
              aria-label="Close notification">
        <i className="fa-solid fa-xmark" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Toast;
