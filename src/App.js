import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';

function App() {
  const name = '추운게좋아요';
  const styleName = {
    backgroundColor: 'black',
    color: 'pink',
    fontSize: 24,
    padding: '1rem'
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
      <InputSample />
    </div>
  );
}

export default App;
