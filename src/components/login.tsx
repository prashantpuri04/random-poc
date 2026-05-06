import { useState } from 'react';
import { ButtonUpdate } from './button-update';
import { ListData } from './ListData';

export const Login = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? <p>login</p> : <p>logout </p>}
      <ButtonUpdate/>
      <ListData />
    </div>
  );
}