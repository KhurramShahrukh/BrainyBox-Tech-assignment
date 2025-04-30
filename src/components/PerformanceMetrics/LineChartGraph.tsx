import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
} from 'recharts';
import { ILineChartGraph } from '../../interfaces/PerformanceMetricsInterfaces';
import { IOPS_GRAPH } from '../../utils/constants';

const LineChartGraph = (props: ILineChartGraph) => {
    const { title, data, loadingData, errorData, type } = props
    const isGraphTypeIops = type === IOPS_GRAPH ? true : false;
    const refLineYMid = isGraphTypeIops ? 500 : 70;
    const refLineYMax = isGraphTypeIops ? 1000 : 35;

    return (
        <>
            <div className='mx-8 mt-8 mb-2 text-cmd text-textColor2'>{title}</div>
            {loadingData ? <div className='mx-8'>Loading Graph...</div>
                : errorData ? <div className='mx-8'>Error in API. Please try again.</div>
                    :
                    <ResponsiveContainer className='px-8 pb-4' width="80%" height="25%">
                        <LineChart data={data}                        >
                            {/* Only X and Y axis, no grid */}
                            <XAxis dataKey="date" />
                            <YAxis ticks={[refLineYMid, refLineYMax]} axisLine={false} tickLine={false} tickFormatter={(value) => isGraphTypeIops ? `${value}k` : `${value} GB/s`} />
                            {/* Optional: add horizontal lines at refLineYMid and refLineYMax using ReferenceLine */}
                            <ReferenceLine y={refLineYMid} stroke="#646B72" />
                            <ReferenceLine y={refLineYMax} stroke="#646B72" />
                            <Tooltip />
                            <Line type="monotone" dataKey="Read" stroke="#AA7EDD" activeDot={{ r: 5 }} />
                            <Line type="monotone" dataKey="Write" stroke="#00A3CA" activeDot={{ r: 5 }} />
                        </LineChart>
                    </ResponsiveContainer>
            }
        </>
    )
}

export default LineChartGraph