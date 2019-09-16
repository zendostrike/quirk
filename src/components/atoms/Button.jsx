import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.button`
  background: ${({ theme }) => theme.colors.featured};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  min-width: 70px;
  padding: 5px 10px;
  cursor: pointer;
`

const Button = ({ text, containerStyle, textStyle }) => (
  <Container style={containerStyle}>
    <span style={textStyle}>{text}</span>
  </Container>
)

Button.propTypes = {
  text: PropTypes.string,
  containerStyle: PropTypes.shape({}),
  textStyle: PropTypes.shape({})
}

Button.defaultProps = {
  text: 'Button',
  containerStyle: {},
  textStyle: {}
}

export default Button
