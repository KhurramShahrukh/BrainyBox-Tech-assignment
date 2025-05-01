import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
} from 'recharts';
import { ILineChartGraph } from '../../interfaces/components/PerformanceMetricsInterfaces';
import { IOPS_GRAPH } from '../../utils/Constants';

const LineChartGraph = (props: ILineChartGraph) => {
    const { title, data, loadingData, errorData, type } = props
    const isGraphTypeIops = type === IOPS_GRAPH ? true : false;
    const refLineYMid = isGraphTypeIops ? 450 : 70;
    const refLineYMax = isGraphTypeIops ? 900 : 35;

    return (
        <>
            <div className='mx-8 mb-2 text-cmd text-textColor2'>{title}</div>
            {loadingData ? <div className='mx-8 text-textColor3'>Loading graph...</div>
                : errorData ? <div className='mx-8 text-textColor3'>Error in API. Please try again.</div>
                    :
                    <div className='w-[100%] h-[12rem] flex justify-center items-start gap-8 px-8'>
                        <ResponsiveContainer className='' width="87.5%" height="100%">
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
                        <div className='w-[12.5%] flex flex-col'>
                            <div className='text-textColor3 text-cmd h-[1.5rem]'>
                                {title}
                            </div>
                            <div className='flex flex-col mt-1'>
                                <div className='w-[100%] bg-bgColor3 border border-borderColor1 flex flex-col p-2'>
                                    <div className='text-textColor4'>Read</div>
                                    <div className='text-cmd text-graphColor1'>{isGraphTypeIops ? "21.2k" : "10.3"} <span className='text-csm'>{isGraphTypeIops ? "IOPS" : "GB/s"}</span></div>
                                </div>
                                <div className='w-[100%] bg-bgColor3 border border-borderColor1 flex flex-col p-2'>
                                    <div className='text-textColor4'>Write</div>
                                    <div className='text-cmd text-graphColor2'>{isGraphTypeIops ? "122.0k" : "38.7"} <span className='text-csm'>{isGraphTypeIops ? "IOPS" : "GB/s"}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default LineChartGraph