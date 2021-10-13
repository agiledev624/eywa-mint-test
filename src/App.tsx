/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useState } from 'react'
import { css, jsx } from '@emotion/react'
import { observer } from 'mobx-react-lite'
import bg from './images/bg.svg'
import { Faucet } from './components/Faucet'

const AppHeader = css({
  background: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
})

const App: React.FC = observer(() => {
  return (
    <div className="App">
      <header css={AppHeader}>
        <Faucet />
      </header>
    </div>
  )
})

export default App
