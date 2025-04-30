export interface IDataPoint {
    date: string;
    value: number;
    Read: number;
    Write: number;
}

export interface ILineChartGraph {
    title: string;
    data: IDataPoint[];
    loadingData: boolean;
    errorData: boolean;
}