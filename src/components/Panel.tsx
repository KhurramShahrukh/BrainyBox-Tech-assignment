import PerformanceMetrics from "./performance-metrics/PerformanceMetrics"
import SnapshotPolicy from "./snapshot-policy/SnapshotPolicy"
import { PERFORMANCE } from "../utils/constants"
import { IPanel } from "../interfaces/components/PanelInterfaces"

const Panel = (props: IPanel) => {
    const { selectedItem } = props

    return (
        <div className='w-[calc(100vw-12.5rem)] min-h-[100vh] bg-bgColor2'>
            {selectedItem === PERFORMANCE ?
                <PerformanceMetrics />
                :
                <SnapshotPolicy />
            }
        </div>
    )
}

export default Panel