type GridProps = {
    children: React.ReactNode;
};

export default function Grid({ children }: GridProps) {
    return <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-6'>{children}</div>;
}
