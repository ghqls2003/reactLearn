import React, {useReducer, useMemo} from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSample2 from './InputSample2';
import UserList from './UserList';
import CreateUser from './CreateUser';

const initialState = {
  users: [
    {id : 1, userName : 'ryong', email : "ghqls2003@naver.com", active: true},
    {id : 2, userName : 'jinju', email : "jinju1991@naver.com", active: false},
    {id : 3, userName : 'ilc', email : 'ILikeCold@naver.com', active: false}
  ]
};

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? {...user, active: !user.active} : user)
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

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

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

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
        <UserDispatch.Provider value={dispatch}>
          <CreateUser />
          <UserList users={users} />
          <div>활성사용자 수 : {count}</div>
        </UserDispatch.Provider>
      </Wrapper>
    </div>
  );
}

export default App;

// 생명주기 메서드는 클래스형 컴포넌트에서만 사용 할 수 있다.

// 



// immer 사용하는 건데 에러가난다 시바

// import React, {useReducer, useMemo} from 'react';
// import Hello from './Hello';
// import './App.css';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
// import InputSample2 from './InputSample2';
// import UserList from './UserList';
// import CreateUser from './CreateUser';
// import produce from 'immer';

// const initialState = {
//   users: [
//     {id : 1, userName : 'ryong', email : "ghqls2003@naver.com", active: true},
//     {id : 2, userName : 'jinju', email : "jinju1991@naver.com", active: false},
//     {id : 3, userName : 'ilc', email : 'ILikeCold@naver.com', active: false}
//   ]
// };

// function reducer(state, action) {
//   switch(action.type) {
//     case 'CREATE_USER':
//       return produce(state, draft => {
//         draft.users.push(action.user);
//       });
//     case 'TOGGLE_USER':
//       return produce(state, draft => {
//         const user = draft.users.find(user => user.id === action.id);
//         user.active = !user.active;
//       });
//     case 'REMOVE_USER':
//       return produce(state, draft => {
//         const index = draft.users.findIndex(user => user.id === action.id);
//         draft.users.splice(index, 1);
//       });
//     default:
//       return state;
//   }
// }

// export const UserDispatch = React.createContext(null);

// function App() {
//   const name = '추운게좋아요';
//   const styleName = {
//     backgroundColor: 'black',
//     color: 'pink',
//     fontSize: 24,
//     padding: '1rem'
//   }

//   const countActiveUsers = () => {
//     console.log('활성 사용자 수를 세는중..');
//     return users.filter(user => user.active).length;
//   }

//   const [state, dispatch] = useReducer(reducer, initialState);

//   const { users } = state;

//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <div>
//       <Wrapper>
//         <Hello name="HelloProps!" color="red" backgroundColor="yellow" />
//         <Hello color="black" backgroundColor="pink" jjin={true} />
//         <div style={styleName}>{name}</div>
//         <div className='gray-box'></div>
//         <Counter />
//       </Wrapper>
//       <Wrapper>
//         <InputSample />
//         <InputSample2 />
//       </Wrapper>
//       <Wrapper>
//         <UserDispatch.Provider value={dispatch}>
//           <CreateUser />
//           <UserList users={users} />
//           <div>활성사용자 수 : {count}</div>
//         </UserDispatch.Provider>
//       </Wrapper>
//     </div>
//   );
// }

// export default App;



// // 