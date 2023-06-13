import React, {useRef, useContext} from "react";
import useInputs from './hooks/useInputs';
import { UserDispatch } from "./App";

const CreateUser = () => {
  const [{userName, email}, onChange, onReset] = useInputs({
    userName: '',
    email: ''
  });

  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);

  const onCreate = () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        userName,
        email
      }
    });
    onReset();
    nextId.current +=1;
  };

  return (
    <div>
      <input name="userName" placeholder="계정명" onChange={onChange} value={userName} />
      <input name="email" placeholder="이메일" onChange={onChange} value={email} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default React.memo(CreateUser);  // 리렌더링 방지 React.memo