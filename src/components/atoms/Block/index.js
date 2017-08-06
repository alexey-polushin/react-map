import React, { PropTypes } from 'react'

const Block = ({ children, className, tag, style, ...props }) => {
  const BlockElement = tag || 'div'
  return (
    <BlockElement
      className={className}
      style={style}
      {...props}
    >
      {children}
    </BlockElement>
  )
}

Block.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  tag: PropTypes.string,
}

export default Block
