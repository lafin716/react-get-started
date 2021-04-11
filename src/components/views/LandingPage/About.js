import React from 'react';
import { withRouter } from 'react-router';

function About(){
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
            <h2>About</h2>
            <p>단순한 정보 페이지입니다.</p>
        </div>
    )
}

export default withRouter(About)