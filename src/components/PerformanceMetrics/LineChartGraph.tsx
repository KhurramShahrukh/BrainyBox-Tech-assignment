import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    // Legend,
    ResponsiveContainer,
} from 'recharts';
import { ILineChartGraph } from '../../interfaces/PerformanceMetricsInterfaces';

const LineChartGraph = (props: ILineChartGraph) => {
    const { title, data, loadingData, errorData } = props

    return (
        <>
            <div className='mx-8 mt-8 mb-2 text-cmd text-textColor2'>{title}</div>
            {loadingData ? <div className='mx-8'>Loading Graph...</div>
                : errorData ? <div className='mx-8'>Error in API. Please try again.</div>
                    :
                    <ResponsiveContainer className='px-8 pb-4' width="80%" height="25%">
                        <LineChart
                            data={data}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis dataKey="value" />
                            <Tooltip />
                            {/* <Legend /> */}
                            <Line type="monotone" dataKey="Read" stroke="#AA7EDD" activeDot={{ r: 5 }} />
                            <Line type="monotone" dataKey="Write" stroke="#00A3CA" activeDot={{ r: 5 }} />
                        </LineChart>
                    </ResponsiveContainer>
            }
        </>
    )
}

export default LineChartGraph