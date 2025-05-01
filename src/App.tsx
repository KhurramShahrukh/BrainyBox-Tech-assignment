import { useState } from 'react'
import { PERFORMANCE } from './utils/Constants'
import Menu from './components/Menu'
import Panel from './components/Panel'

const App = () => {
  const [selectedItem, setSelectedItem] = useState<string>(PERFORMANCE)

  return (
    <div className='flex'>
      <Menu selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <Panel selectedItem={selectedItem} />

    </div>
  )
}

export default App