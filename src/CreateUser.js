import React from "react";

const CreateUser = ({userName, email, onChange, onCreate}) => {
  return (
    <div>
      <input name="userName" placeholder="계정명" onChange={onChange} value={userName} />
      <input name="email" placeholder="이메일" onChange={onChange} value={email} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default React.memo(CreateUser);  // 리렌더링 방지 React.memo