import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function LoginPage(props) {

    // 리덕스 디스패치 
    const dispatch = useDispatch()

    // 리액트 훅에서 지원하는 functional 용 state 정의
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    // 이메일 영역 입력 핸들러
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    // 비밀번호 영역 입력 핸들러
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    // 폼 전송 핸들러
    const onSubmitHandler = (event) => {
        event.preventDefault();

        // 요청 보낼 body 데이터
        let body = {
            email: Email,
            password: Password
        }
        
        // 리덕스로 처리함
        // action함수를 호출한다
        // 리턴은 promise 형태로 리턴
        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess){
                    props.history.push('/')
                }else{
                    alert(response.payload.message)
                }
            })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br/>
                <button type="submit">로그인</button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)