import React from 'react'
import { Wrapper,Image } from './Actor.styles'
import PropTypes from 'prop-types'

const index = ({name,character,imageUrl}) => {
    return (
        <Wrapper>
            <Image src={imageUrl} alt='actor-thumb'/>
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    )
}

index.propTypes={
    name:PropTypes.string,
    character:PropTypes.string,
    imageUrl:PropTypes.string,
}

export default index
