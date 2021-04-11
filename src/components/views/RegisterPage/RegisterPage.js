import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {

    // 리덕스 디스패치 
    const dispatch = useDispatch()

    // 리액트 훅에서 지원하는 functional 용 state 정의
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    // 이름 영역 입력 핸들러
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    // 이메일 영역 입력 핸들러
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    // 비밀번호 영역 입력 핸들러
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    // 비밀번호 확인 영역 입력 핸들러
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    // 폼 전송 핸들러
    const onSubmitHandler = (event) => {
        event.preventDefault();

        // 비밀번호 확인 검사
        if(Password !== ConfirmPassword){
            return alert('비밀번호가 일치하지 않습니다.')
        }

        // 요청 보낼 body 데이터
        let body = {
            name: Name,
            email: Email,
            password: Password
        }
        
        // 리덕스로 처리함
        // action함수를 호출한다
        // 리턴은 promise 형태로 리턴
        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.success){
                    props.history.push('/login')
                }else{
                    alert('Failed to sign up')
                }
            })
            .catch(err => {
                alert('에러발생! :: ', err);
            })
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                <br/>
                <button type="submit">회원가입</button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
