import React from 'react'

import { Button } from 'ogibutton'
import 'ogibutton/dist/index.css'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: '5px',
        width: '100%',
        height: 'auto',
        marginTop: '20px'
      }}
    >
      <Button>Default Button</Button>
      <Button type='primary'>Primary Button</Button>
      <Button type='dashed'>Dashed Button</Button>
      <Button type='text'>Text Button</Button>
      <Button type='link'>Link Button </Button>
    </div>
  )
}

export default App
