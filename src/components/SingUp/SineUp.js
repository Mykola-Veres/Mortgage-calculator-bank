import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from 'components/AuthForm/AuthForm';
import { setUser } from 'redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  console.log('navigate', navigate);

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      })
      .catch(console.error);
  };

  return <Form title="register" handleClick={handleRegister} />;
};

export { SignUp };
