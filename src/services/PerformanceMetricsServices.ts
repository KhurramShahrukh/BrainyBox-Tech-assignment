import { IDataPoint } from "../interfaces/components/PerformanceMetricsInterfaces";
import { iopsData, throughputData } from "./DummyData";
import { getCachedData, setCachedData } from "../utils/IndexedDbUtils";

export const fetchIopsDataService = async (): Promise<IDataPoint[]> => {
    const cacheKey = "iopsData";
    const cached = await getCachedData(cacheKey);
    if (cached) return cached;

    // Simulated API call
    const result = await new Promise<IDataPoint[]>((resolve) =>
        setTimeout(() => resolve(iopsData), 1000)
    );

    await setCachedData(cacheKey, result);
    return result;
};

export const fetchThroughputDataService = async (): Promise<IDataPoint[]> => {
    const cacheKey = "throughputData";
    const cached = await getCachedData(cacheKey);
    if (cached) return cached;

    const result = await new Promise<IDataPoint[]>((resolve) =>
        setTimeout(() => resolve(throughputData), 1000)
    );

    await setCachedData(cacheKey, result);
    return result;
};
