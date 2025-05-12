export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-background flex h-screen max-h-[50vh] w-full items-center justify-center'>
            <div className='w-full max-w-xl'>{children}</div>
        </div>
    );
}
