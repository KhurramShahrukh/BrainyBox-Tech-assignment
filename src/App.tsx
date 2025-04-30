import { useState } from 'react'
import Menu from './components/Menu'
import PerformanceMetrics from './components/PerformanceMetrics/PerformanceMetrics'
import { PERFORMANCE } from './utils/constants'

const App = () => {
  const [selectedItem, setSelectedItem] = useState<string>(PERFORMANCE)

  return (
    <div className='flex'>
      <Menu selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      {selectedItem === PERFORMANCE ?
        <PerformanceMetrics />
        :
        <></>
      }
    </div>
  )
}

export default App