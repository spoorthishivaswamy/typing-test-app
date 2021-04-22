import React, { memo } from 'react'

function Header() {
  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark fixed-top shadow-sm'>
        <a className='navbar-brand' href='/'>
          <span className='font-weight-bold'>Typing</span>Test App
        </a>
      </nav>
    </header>
  )
}

export default memo(Header)
