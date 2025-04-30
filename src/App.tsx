import { useState } from 'react'
import Menu from './components/Menu'
import { PERFORMANCE } from './utils/constants'
import PerformanceMetrics from './components/performance-metrics/PerformanceMetrics'
import SnapshotPolicy from './components/snapshot-policy/SnapshotPolicy'

const App = () => {
  const [selectedItem, setSelectedItem] = useState<string>(PERFORMANCE)

  return (
    <div className='flex'>
      <Menu selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      {selectedItem === PERFORMANCE ?
        <PerformanceMetrics />
        :
        <SnapshotPolicy />
      }
    </div>
  )
}

export default App