import React from 'react'
import {Wrapper,Content,Text} from './HeroImage.styles'
import PropTypes from 'prop-types'
const index = ({image,title,text}) => {
    return (
        <Wrapper image={image}>
            <Content>
                <Text>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </Text>
            </Content>
        </Wrapper>
    )
}
index.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}
export default index
