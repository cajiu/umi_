import styles from './login.css';

function LoginLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!   login</h1>
      {props.children}
    </div>
  );
}

export default LoginLayout;
