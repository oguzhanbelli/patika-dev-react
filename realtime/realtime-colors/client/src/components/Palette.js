import {useState} from 'react'
import { send } from '../socketApi'
function Palette({activeColor}) {
  const [color,setColor] = useState('');
  console.log(color);
  return (
    <div className='palette'>

        <input onChange={(e) => setColor(e.target.value)} value={activeColor} type="color" />
        <button onClick={() =>send(color)} >Click</button>
    </div>
  )
}

export default Palette;