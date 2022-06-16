import React from 'react';
import { Row } from "antd";
import "./profile.css"

function Profile(props) {
    return (
        <Row justify="center" className='box-shadow profile '>
            index
            <div className='color-wrapper'>
                <div onClick={() => props.setColor('#EDA7C8')} className={`color-box color-pink box-shadow${props.color === '#EDA7C8' ? '-inset': '' }`}></div>
                <div onClick={() => props.setColor('#A7BBED')} className={`color-box color-blue  box-shadow${props.color === '#A7BBED' ? '-inset': '' }`}></div>
                <div onClick={() => props.setColor('#666666')} className={`color-box color-black  box-shadow${props.color === '#666666' ? '-inset': '' }`}></div>
            </div>
        </Row>
    )
}

export default Profile
