import { openDB } from 'idb';

const DB_NAME = 'performance-metrics-db';
const STORE_NAME = 'metrics';
const EXPIRY_MS = 60 * 60 * 1000; // 1 hour

export const getCachedData = async (key: string): Promise<any | null> => {
    const db = await openDB(DB_NAME, 1, {
        upgrade(db) {
            db.createObjectStore(STORE_NAME);
        },
    });

    const entry = await db.get(STORE_NAME, key);
    if (!entry) return null;

    const isExpired = Date.now() - entry.timestamp > EXPIRY_MS;
    return isExpired ? null : entry.data;
};

export const setCachedData = async (key: string, data: any): Promise<void> => {
    const db = await openDB(DB_NAME, 1);
    await db.put(STORE_NAME, { data, timestamp: Date.now() }, key);
};
