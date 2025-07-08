import { useActionState } from "react";

const UseActionStateHook = () => {
  const [data, action, pending] = useActionState(handleLogin);

  const handleLogin = () => {

  }

  return (
    <div>
      <h1>Use Action State Hook </h1>
      <form onSubmit={action}>
        <input type="text" name="email" placeholder="Enter Email" />
        <input type="text" name="password" placeholder="Enter Password" />
        <button>LOGIN</button>
      </form>
    </div>
  );

};

export default UseActionStateHook;
