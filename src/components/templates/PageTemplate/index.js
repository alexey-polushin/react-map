import React, { PropTypes } from 'react'
import { Block } from 'components'

const PageTemplate = ({ header, children, footer, ...props }) => {
  return (
    <Block {...props}>
      {header}
      <Block className="content">
        {children}
      </Block>
      {footer}
    </Block>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
}

export default PageTemplate
