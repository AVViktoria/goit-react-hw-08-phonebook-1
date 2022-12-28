import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
// import { useNavigate} from 'react-router-dom';



export default function LoginView() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e=> {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
    // const { currentTarget: formRef } = event;
    // const { email, password } = formRef.elements;

    // const credentials = {
    //   email: email.value,
    //   password: password.value,
    // };

    // dispatch(authOperations.logIn(credentials))
    //   .unwrap()
    //   .then(() => navigate('/', { replace: true }))
    //   .catch((error) => {});
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} className = 'form' autoComplete="off">
        <label className = 'label'>
          E-mail
          <input
            type="email"
            name="email"
            
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className = 'label'>
          Password
          <input
            type="password"
            name="password"
            // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}$"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
