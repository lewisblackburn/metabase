// NOTE: This code is modified from due to react-persist issue: https://github.com/rt2zz/redux-persist/issues/1208
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
    return {
        getItem(_key: string) {
            return Promise.resolve(null);
        },
        setItem(_key: string, value: string) {
            return Promise.resolve(value);
        },
        removeItem(_key: string) {
            return Promise.resolve();
        }
    };
};

const storage = typeof window === 'undefined' ? createNoopStorage() : createWebStorage('local');

export default storage;
