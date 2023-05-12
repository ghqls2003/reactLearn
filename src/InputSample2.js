import React, {useState, useRef} from "react";

function InputSample2() {
  const [inputs, setInputs] = useState({name: '', nickName: ''});
  const nameInput = useRef();
  const {name, nickName} = inputs;  // 비구조화 할당을 통한 값 추출.
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,  // 기존의 input 객체를 복사한 뒤
      [name]: value  // name 키를 가진 값을 value로 설정
    });
  };
  const onReset = () => {
    setInputs({
      name: '',
      nickName: ''
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input name="name" onChange={onChange} placeholder="이름" type="text" value={name} ref={nameInput}/>
      <input name="nickName" onChange={onChange} placeholder="닉네임" type="text" value={nickName} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name}({nickName})
      </div>
    </div>
  )
}

export default InputSample2;