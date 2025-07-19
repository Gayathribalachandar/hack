import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  const handleGoogleLogin = () => {
    router.push('/dashboard');
  };

  return (
    <div className={styles.page}>
      <div className={styles.overlay}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className={styles.passwordWrapper}>
              <input
                className={styles.input}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className={styles.eyeButton}
                onClick={togglePasswordVisibility}
              >
                <img
                  src={`/icons/${showPassword ? 'eye-solid.svg' : 'eye-slash-regular.svg'}`}
                  alt="Toggle password visibility"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </form>
          <div className={styles.divider}>OR</div>
          <button onClick={handleGoogleLogin} className={styles.googleButton}>
            <img
              src="/icons/google-brands.svg"
              alt="Google Icon"
              className={styles.googleIcon}
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
