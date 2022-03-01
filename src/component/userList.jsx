import React, { useEffect } from "react";

function User({ user, onDelete, onToggle }) {
  // useEffect: 컴포넌트가 마운트 됐을때(처음 나타났을때), 언마운트 됐을떄(사라질 때), 업데이트 될때 (특정 props가 바뀔 때) 작업을 처리하는 방법

  // 보통 마운트 시에 하는 작업들
  // props로 받은 값을 컴포넌트의 로컬 상태로 설정
  // 외부 API 요청 (REST API 등)
  // 라이브러리 사용
  // setInterval 통한 반복 작업 혹은 setTimeout을 통한 작업 예약

  // 언마운트 시 에 하는 작업들
  // setInterval, setTimeout을 사용하여 등록한 작업들 clear 하기
  // 라이브러리 인스턴스 제거

  useEffect(() => {
    console.log("user값 설정");
    console.log(user, "설정");
    return () => {
      console.log("user가 바뀌기 전");
      console.log(user, "바뀌기 전");
    };
  }, [user]);

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onDelete(user.id)}>Del</button>
    </div>
  );
}

function UserList({ users, onDelete, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
