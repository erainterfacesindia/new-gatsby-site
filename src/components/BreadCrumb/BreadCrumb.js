import React from 'react'
 import { Link } from 'gatsby'
 import { BreadWrapper } from './BreadCrumb.styles'

const BreadCrumb = ({ parent}) => {
    return (
        <BreadWrapper>
           <Link to="/">
      <span>Home</span>
    </Link>
    <span className="divider">/</span>
    {parent ? (
      <>
        <Link to={parent.uri}>
          <span dangerouslySetInnerHTML={{ __html: parent.title }} />
        </Link>
        <span className="divider">/</span>
      </>
    ) : null}
        </BreadWrapper>
    )
}

export default BreadCrumb
