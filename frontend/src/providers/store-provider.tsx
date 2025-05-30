'use client';

import { useRef } from 'react';

import { AppStore, makeStore } from '@/store/store';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore>(null as unknown as AppStore);
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }
    const persistedStore = persistStore(storeRef.current);

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistedStore}>
                {children}
            </PersistGate>
        </Provider>
    );
}
