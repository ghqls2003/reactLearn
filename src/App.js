import React, {useRef, useState} from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSample2 from './InputSample2';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const name = '추운게좋아요';
  const styleName = {
    backgroundColor: 'black',
    color: 'pink',
    fontSize: 24,
    padding: '1rem'
  }

  const [inputs, setInputs] = useState({
    userName: '',
    email: ''
  });
  const {userName, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {id : 1, userName : 'ryong', email : "ghqls2003@naver.com", active: true},
    {id : 2, userName : 'jinju', email : "jinju1991@naver.com", active: false},
    {id : 3, userName : 'ilc', email : 'ILikeCold@naver.com', active: false}
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      userName,
      email
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));
    setInputs({
      userName: '',
      email: ''
    });
    nextId.current += 1;
  }
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }
  const onToggle = id => {
    setUsers(
      users.map(user => user.id === id ? {...user, active: !user.active} : user)
    );
  }
 
  return (
    <div>
      <Wrapper>
        <Hello name="HelloProps!" color="red" backgroundColor="yellow" />
        <Hello color="black" backgroundColor="pink" jjin={true} />
        <div style={styleName}>{name}</div>
        <div className='gray-box'></div>
        <Counter />
      </Wrapper>
      <Wrapper>
        <InputSample />
        <InputSample2 />
      </Wrapper>
      <Wrapper>
        {/* <UserList /> */}
        <CreateUser userName={userName} email={email} onChange={onChange} onCreate={onCreate} />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      </Wrapper>
    </div>
  );
}

export default App;



