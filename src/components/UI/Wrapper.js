import React from 'react'
import * as wrapperStyle from '../UI/Wrapper.module.css';



const Wrapper = props => {
    return (<div className={`${wrapperStyle.wrapperDiv} ${props.customClassname}`}>{props.children}</div>);
}

export default Wrapper