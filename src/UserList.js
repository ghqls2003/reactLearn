import React from "react";

function User({user, onRemove, onToggle}) {
  return(
    <div>
      <b style={{cursor: 'pointer', color: user.active ? 'green' : 'black'}} onClick={() => onToggle(user.id)}>{user.userName}</b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  )
}

function UserList({users, onRemove, onToggle}) {
  // const users = [
  //   {id : 1, userName : 'ryong', email : "ghqls2003@naver.com"},
  //   {id : 2, userName : 'jinju', email : "jinju1991@naver.com"},
  //   {id : 3, userName : 'ilc', email : 'ILikeCold@naver.com'}
  // ];

  // 기본적으로 key값이 있어야하는데 없다면 배열의 기본 index가 key 값으로 사용 될 수 있다.
  // map에 key값을 주면 렌더링이 더욱 효율적이다
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}  
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
    </div>
  )
}


export default UserList;

// 16 useEffect 사용하여 마운트 등.ㄷ.ㅇ....보기