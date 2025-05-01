import { lazy, Suspense } from "react";
import { PERFORMANCE } from "../utils/Constants";
import { IPanel } from "../interfaces/components/PanelInterfaces";

// Dynamically importd components
const PerformanceMetrics = lazy(() => import("./performance-metrics/PerformanceMetrics"));
const SnapshotPolicy = lazy(() => import("./snapshot-policy/SnapshotPolicy"));

const Panel = ({ selectedItem }: IPanel) => {
    return (
        <div className='w-[calc(100vw-13rem)] min-h-[100vh] bg-bgColor2'>
            <Suspense fallback={<div className="w-[calc(100vw-13rem)] min-h-[100vh] bg-bgColor2"></div>}>
                {selectedItem === PERFORMANCE ? <PerformanceMetrics /> : <SnapshotPolicy />}
            </Suspense>
        </div>
    );
};

export default Panel;
