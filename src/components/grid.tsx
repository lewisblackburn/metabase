type GridProps = {
    children: React.ReactNode;
};

export default function Grid({ children }: GridProps) {
    return (
        <div className='3xl:grid-cols-11 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-10'>
            {children}
        </div>
    );
}
