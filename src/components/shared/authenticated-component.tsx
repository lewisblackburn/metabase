// 'use client';

// import { useEffect, useState } from 'react';

// import DefaultLoading from '@/components/shared/default-loading';
// import { useNhostClient } from '@nhost/nextjs';

// const AuthenticatedComponent = ({ children }: { children: React.ReactNode }) => {
//     const nhost = useNhostClient();
//     const [initialized, setInitialized] = useState(false);

//     useEffect(() => {
//         const unsubscribe = nhost.auth.onAuthStateChanged(() => {
//             setInitialized(true);
//         });

//         return () => {
//             unsubscribe();
//         };
//     }, [nhost.auth]);

//     if (!initialized) {
//         return (
//             <div className='h-screen w-screen'>
//                 <DefaultLoading />
//             </div>
//         );
//     }

//     return <>{children}</>;
// };

// export default AuthenticatedComponent;
