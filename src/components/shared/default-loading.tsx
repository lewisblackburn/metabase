interface DefaultLoadingProps {
    customSkeleton?: React.ReactNode;
}

export default function DefaultLoading({ customSkeleton }: DefaultLoadingProps) {
    return <>{customSkeleton}</>;
}
