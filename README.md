<h2 align="center">React JS Started 프로젝트</h2>
<span align="center">리액트로 간단한 백엔드 통신하는 예제</span>

## Stacks
- react
- react hooks
- react-router-dom
- redux
- redux-promise
- redux-thunk
- axios
- ant design

## 간략정리
- React Hooks
  - functional 컴포넌트에서 props, state, lifecycle 등 class 컴포넌트에서 사용하는 기능들을 사용할 수 있게 해줌
  - useEffect() : 라이프사이클에 맞춰 동작 수행할수있게 해줌 
  - useState() : state 사용
- React Router
  - react router를 통해 웹 주소에 따라 컴포넌트를 분기처리 할 수있음
  - SPA이므로 컴포넌트 이동 시 &lt;a href="link"&gt;가 아닌 &lt;Link to="link"&gt; 형식으로 사용
- ant design
  - 리액트에서 사용가능한 디자인 프레임워크
  - bootstrap과 같다고 보면된다.
  - 사이트에 컴포넌트별로 쉽게 가져가 쓸 수있음 [https://ant.design/](https://ant.design/)
- Redux
  - state를 하나의 store에서 통합관리해주는 라이브러리
  - 통합으로 관리하게 되면 상태가 바뀌는 곳만 리렌더링을 수행하여 성능 이점
  - action : state가 변경되는 동작을 여기서 수행
  - reducer : 액션에서 받아온 상태를 스토어에 갱신
