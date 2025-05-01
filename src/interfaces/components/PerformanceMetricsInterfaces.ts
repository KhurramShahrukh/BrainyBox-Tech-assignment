export interface IDataPoint {
    date: string;
    Read: number;
    Write: number;
}

export interface ILineChartGraph {
    title: string;
    data: IDataPoint[];
    loadingData: boolean;
    errorData: boolean;
    type: string
}

export interface IDateRangeDropdown {
    value: string
}