type GridProps = {
    children: React.ReactNode;
};

export default function Grid({ children }: GridProps) {
    return (
        <div className='xs:grid-cols-3 3xl:grid-cols-8 4xl:grid-cols-9 5xl:grid-cols-10 6xl:grid-cols-11 7xl:grid-cols-12 8xl:grid-cols-13 9xl:grid-cols-14 grid grid-cols-2 gap-5 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
            {children}
        </div>
    );
}
