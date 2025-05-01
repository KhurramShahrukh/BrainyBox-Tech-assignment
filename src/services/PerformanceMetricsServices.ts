import { IDataPoint } from "../interfaces/components/PerformanceMetricsInterfaces";
import { iopsData, throughputData } from "./DummyData";

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