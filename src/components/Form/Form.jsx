import { useForm } from 'react-hook-form';
import styles from './Form.module.css';


function Form() {
  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
      <h1 className={styles.form__header}>Login</h1>
      <form className={styles.form__fields} onSubmit={handleSubmit(onSubmit)}>
          <input 
            className={styles.form__input}
            type='email'
            placeholder='Email'
            {...register('email', {
              required: "Necessary to write",
              pattern: {
                value: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$/,
                message: "Invalid email"
              }
            })}
          />
          <div className={styles.form__error}>{errors?.email && <p>{errors?.email?.message || "Error" }</p>}</div>
        <input 
            className={styles.form__input}
            placeholder='Password'
            type='password'
            {...register('password', {
              required: "Necessary to write",
              minLength: {
                value: 8,
                message: "Minimum 8 characters"
              },
              maxLength: {
                value: 12,
                message: "Maximum 12 characters"
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/,
              }
            })}
          />
          <p className={styles.form__error}>Password must contain only latin letters, at least 1 upper-case character, 1 lower-case character, one number and one special character.</p>
          <div className={styles.form__error}>{errors?.password && <p>{errors?.password?.message || "Follow rules" }</p>}</div>
        <input 
            className={styles.form__input}
            placeholder='Password confirmation'
            {...register('confirmPassword', {
              required: "Necessary to write",
              minLength: {
                value: 8,
                message: "Minimum 8 characters"
              }
            })}
          />
          <div className={styles.form__error}>{errors?.confirmPassword && <p>{errors?.confirmPassword?.message || "Error" }</p>}</div>
        <input type='submit' disabled={!isValid} className={styles.form__btn}/>
      </form>
    </div>
    </div>
  );
}

export default Form;
