import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSample2 from './InputSample2';
import UserList from './UserList';
import CreateUser from './CreateUser';

const initialState = {
  inputs: {
    userName: '',
    email: ''
  },
  users: [
    {id : 1, userName : 'ryong', email : "ghqls2003@naver.com", active: true},
    {id : 2, userName : 'jinju', email : "jinju1991@naver.com", active: false},
    {id : 3, userName : 'ilc', email : 'ILikeCold@naver.com', active: false}
  ]
};

function reducer(state, action) {
  switch(action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    default:
      return state;
  }
}

function App() {
  const name = '추운게좋아요';
  const styleName = {
    backgroundColor: 'black',
    color: 'pink',
    fontSize: 24,
    padding: '1rem'
  }

  const countActiveUsers = () => {
    console.log('활성 사용자 수를 세는중..');
    return users.filter(user => user.active).length;
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;
  const { userName, email } = state.inputs;

  const onChange = useCallback(
    e => {
      const {name, value} = e.target;
      dispatch({
        type: 'CHANGE_INPUT',
        name,
        value
      });
    }, []
  );

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        userName,
        email
      }
    });
    nextId.current +=1;
  }, [userName, email]);

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
        <UserList users={users} />
        <div>활성사용자 수 : 0</div>
      </Wrapper>
    </div>
  );
}

export default App;



// 20 useReducer onToggle, onRemove 부터 작성하면 된다