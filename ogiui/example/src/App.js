import React from 'react'

import { Button,Paragraph } from 'ogiui'
import 'ogiui/dist/index.css'

const App = () => {
  return (
    <>
    <Paragraph text="Create React Library Example 😄" />
    <Button text="Merhaba" onClick={() => alert('Merhaba tıklandı')} ></Button>
    </>
  )
}

export default App
