import React from 'react';
import {Row} from "antd";
import "./profile.css"

function Profile() {
    return (
        <Row justify="center" className='box-shadow profile '>
            index
            <div className='color-wrapper'>
                <div className='color-box color-pink box-shadow'></div>
                <div className='color-box color-blue box-shadow'></div>
                <div className='color-box color-black box-shadow'></div>
            </div>
        </Row>
    )
}

export default Profile