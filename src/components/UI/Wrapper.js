import {styles} from 'styled-components';

const Wrapper = props => {

    const wrapperStyles = `
        padding: 0 10%;
    `

    return <div>{props.children}</div>
}

export default Wrapper;