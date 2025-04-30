import { IDataPoint } from "../interfaces/PerformanceMetricsInterfaces";
import { iopsData, throughputData } from "../utils/constants";

export const fetchIopsDataService = async (): Promise<IDataPoint[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(iopsData);
        }, 1000); // 1-second delay
    });
};


export const fetchThroughputDataService = async (): Promise<IDataPoint[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(throughputData);
        }, 1000); // 1-second delay
    });
};