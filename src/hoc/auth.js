import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../_actions/user_action';

/**
 * 인증처리 hoc
 * @param {Component} SpecificComponent 
 * @param {null, true, false} option 
 * @param {null, true, false} adminRoute 
 * @returns Component
 */
export default function (SpecificComponent, option, adminRoute = null){

    /**
     * option : 접근 권한 여부
     *      null : 아무나 접근 가능한 컴포넌트
     *      true : 로그인한 유저만 접근 가능
     *      false : 로그인한 유저는 접근 불가능
     */

    function AuthticationCheck(props){

        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(authUser())
                .then(response => {
                    if(!response.payload.isAuth){ 
                        // 로그인 하지 않은 상태에서 option이 true면 로그인 요청
                        if(option){
                            props.history.push('/login')
                        }
                    } else { 
                        // 로그인 한 상태에서 어드민이 아닌데 어드민 페이지로 가려면 블락
                        if(adminRoute && !response.payload.isAdmin){
                            props.history.push('/')
                        }else{
                            // 로그인을 했는데 로그인이 필요없는 페이지로 가는경우 메인으로 이동
                            if(option === false){
                                props.history.push('/')
                            }
                        }

                    }
                })

        }, [])

        return (
            <SpecificComponent />
        )
    }

    return AuthticationCheck
}