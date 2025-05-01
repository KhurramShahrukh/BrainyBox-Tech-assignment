import LineChartGraph from "./LineChartGraph"
import { IDataPoint, IDateRangeDropdown } from "../../interfaces/components/PerformanceMetricsInterfaces";
import { useEffect, useState } from "react";
import { fetchIopsDataService, fetchThroughputDataService } from "../../services/PerformanceMetricsServices";
import { IOPS_GRAPH, THROUGHPUT_GRAPH } from "../../utils/Constants";
import Dropdown from "../common/Dropdown";

const performanceMetricsDropdownData: IDateRangeDropdown[] = [
    { value: "Last 7 days" },
    { value: "Last 30 days" },
]

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
        <div className='p-4'>
            <div className="flex items-center justify-between">
                <div className='text-clg text-textColor1'>Performance Metrics</div>
                <Dropdown options={performanceMetricsDropdownData} />
            </div>
            <br />
            <LineChartGraph title='IOPS' data={iopsDataState} loadingData={loadingIops} errorData={errorIops} type={IOPS_GRAPH} />
            <br />
            <br />
            <LineChartGraph title='Throughput' data={throughputDataState} loadingData={loadingThroughput} errorData={errorThroughput} type={THROUGHPUT_GRAPH} />
        </div>
    )
}

export default PerformanceMetrics