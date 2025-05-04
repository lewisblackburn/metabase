function Dot({ className }: { className?: string }) {
    return (
        <svg
            width='6'
            height='6'
            fill='currentColor'
            viewBox='0 0 6 6'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
            aria-hidden='true'>
            <circle cx='3' cy='3' r='3' />
        </svg>
    );
}

export default function Notification({ notification, onClick }: { notification: any; onClick: () => void }) {
    return (
        <div key={notification.id} className='hover:bg-accent rounded-md px-3 py-2 text-sm transition-colors'>
            <div className='relative flex items-start gap-3 pe-3'>
                <img
                    className='size-9 rounded-md'
                    src={notification.image}
                    width={32}
                    height={32}
                    alt={notification.user}
                />
                <div className='flex-1 space-y-1'>
                    <button className='text-foreground/80 text-left after:absolute after:inset-0' onClick={onClick}>
                        <span className='text-foreground font-medium hover:underline'>{notification.user}</span>{' '}
                        {notification.action}{' '}
                        <span className='text-foreground font-medium hover:underline'>{notification.target}</span>.
                    </button>
                    <div className='text-muted-foreground text-xs'>{notification.timestamp}</div>
                </div>
                {notification.unread && (
                    <div className='absolute end-0 self-center'>
                        <Dot />
                    </div>
                )}
            </div>
        </div>
    );
}
