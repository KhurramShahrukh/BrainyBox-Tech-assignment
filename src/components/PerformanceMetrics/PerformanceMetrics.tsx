import LineChartGraph from "./LineChartGraph"
import { IDataPoint } from "../../interfaces/PerformanceMetricsInterfaces";
import { useEffect, useState } from "react";
import { fetchIopsDataService, fetchThroughputDataService } from "../../services/PerformanceMetricsServices";
import { IOPS_GRAPH, THROUGHPUT_GRAPH } from "../../utils/constants";
import arrow from '../../assets/arrow.png'

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
        <div className='w-[calc(100vw-12.5rem)] h-[100vh] bg-bgColor2 p-4'>
            <div className="flex justify-between items-center">
                <div className='text-clg text-textColor1'>Performance Metrics</div>
                <div className='text-csm text-textColor4 bg-bgColor4 border border-borderColor2 py-1 px-2 rounded flex justify-center items-center cursor-pointer'>
                    Last 31 days
                    <img className="px-2" src={arrow} />
                </div>
            </div>
            <LineChartGraph title='IOPS' data={iopsDataState} loadingData={loadingIops} errorData={errorIops} type={IOPS_GRAPH} />
            <br />
            <LineChartGraph title='Throughput' data={throughputDataState} loadingData={loadingThroughput} errorData={errorThroughput} type={THROUGHPUT_GRAPH} />
        </div>
    )
}

export default PerformanceMetrics