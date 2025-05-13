import { useState } from 'react'

import Bai1 from './Bai1'
import Bai2 from './Bai2'
import Bai3 from './Bai3.jsx'
import Bai4 from './Bai4'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
    </>
  )
}

export default App;
