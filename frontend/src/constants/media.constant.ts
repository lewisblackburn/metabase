export const BUCKET = {
    POSTER: 'poster',
    BACKDROP: 'backdrop',
    HEADSHOT: 'headshot',
    ARTWORK: 'artwork',
    LOGO: 'logo',
    AVATAR: 'avatar',
    COVER: 'cover'
};

export type BucketType = (typeof BUCKET)[keyof typeof BUCKET];
