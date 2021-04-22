import React, { memo } from 'react'

interface Props {
  children: JSX.Element[] | JSX.Element
}

function Layout({ children }: Props) {
  return (
    <div className='container'>
      <div className='row'>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default memo(Layout)
