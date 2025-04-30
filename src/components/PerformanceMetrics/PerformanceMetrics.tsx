import LineChartGraph from "./LineChartGraph"
import { IDataPoint } from "../../interfaces/PerformanceMetricsInterfaces";
import { useEffect, useState } from "react";
import { fetchIopsDataService, fetchThroughputDataService } from "../../services/PerformanceMetricsServices";



const PerformanceMetrics = () => {
    const [iopsDataState, setIopsDataState] = useState<IDataPoint[]>([]);
    const [throughputDataState, setThroughputDataState] = useState<IDataPoint[]>([]);
    const [loadingIops, setLoadingIops] = useState(true);
    const [loadingThroughput, setLoadingThroughput] = useState(true);
    const [errorIops, setErrorIops] = useState(false);
    const [errorThroughput, setErrorThroughput] = useState(true);

    const fetchIopsData = async () => {
        try {
            const iopsData = await fetchIopsDataService()
            setIopsDataState(iopsData)
            setLoadingIops(false)
            if (iopsData?.length > 0) {
                setErrorIops(false)
            } else {
                setErrorIops(true)
            }
        } catch (error) {
            setLoadingIops(false)
            setErrorIops(true)
            console.error("error in fetchIopsData:", error)
        }
    }

    const fetchThroughputData = async () => {
        try {
            const throughputData = await fetchThroughputDataService()
            setThroughputDataState(throughputData)
            setLoadingThroughput(false)
            if (throughputData?.length > 0) {
                setErrorThroughput(false)
            } else {
                setErrorThroughput(true)
            }
        } catch (error) {
            setLoadingThroughput(false)
            setErrorThroughput(true)
            console.error("error in fetchThroughputData:", error)
        }
    }

    useEffect(() => {
        fetchIopsData()
        fetchThroughputData()
    }, []);

    return (
        <div className='w-[calc(100vw-200px)] h-[100vh] bg-bgColor2 p-4'>
            <div className='text-clg text-textColor1'>Performance Metrics</div>
            <LineChartGraph title='IOPS' data={iopsDataState} loadingData={loadingIops} errorData={errorIops} />
            <LineChartGraph title='Throughput' data={throughputDataState} loadingData={loadingThroughput} errorData={errorThroughput} />
        </div>
    )
}

export default PerformanceMetrics