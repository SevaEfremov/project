import React, { useState }  from 'react';

type AuthMode = 'login' | 'register';

const AuthForm: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleMode = () => {
    setMode(prev => (prev === 'login' ? 'register' : 'login'));
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'register' && password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    alert(`${mode === 'login' ? 'Вход' : 'Регистрация'} выполнена!`);
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '40px',
      maxWidth: '400px',
      margin: '50px auto',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ color: '#003366', textAlign: 'center' }}>
        {mode === 'login' ? 'Войти в аккаунт' : 'Регистрация'}
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="email"
          placeholder="Электронная почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        {mode === 'register' && (
          <input
            type="password"
            placeholder="Подтверждение пароля"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        )}
        <button
          type="submit"
          style={{
            backgroundColor: '#0066cc',
            color: '#fff',
            padding: '12px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
        </button>
      </form>
      <p style={{ marginTop: '15px', textAlign: 'center' }}>
        {mode === 'login' ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}&nbsp;
        <button
          onClick={toggleMode}
          style={{
            background: 'none',
            border: 'none',
            color: '#0066cc',
            cursor: 'pointer',
            textDecoration: 'underline',
            padding: 0,
            fontSize: '1em'
          }}
        >
          {mode === 'login' ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;