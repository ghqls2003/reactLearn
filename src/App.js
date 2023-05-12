import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSample2 from './InputSample2';
import UserList from './UserList';

function App() {
  const name = '추운게좋아요';
  const styleName = {
    backgroundColor: 'black',
    color: 'pink',
    fontSize: 24,
    padding: '1rem'
  }
  const users = [
    {id : 1, userName : 'ryong', email : "ghqls2003@naver.com"},
    {id : 2, userName : 'jinju', email : "jinju1991@naver.com"},
    {id : 3, userName : 'ilc', email : 'ILikeCold@naver.com'}
  ];
 
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
        <UserList users={users} />
      </Wrapper>
    </div>
  );
}

export default App;
