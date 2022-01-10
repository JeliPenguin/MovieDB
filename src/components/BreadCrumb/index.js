import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Content } from './BreadCrumb.styles'
import PropTypes from 'prop-types'
const index = ({ movieTitle }) => {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitle}</span>
            </Content>
        </Wrapper>
    )
}

index.propTypes = {
    movieTitle: PropTypes.string,
}

export default index
