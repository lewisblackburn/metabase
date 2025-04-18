export const MEDIA_TYPE = {
    POSTER: 'poster',
    BACKDROP: 'backdrop',
    HEADSHOT: 'headshot',
    ARTWORK: 'artwork',
    LOGO: 'logo',
    AVATAR: 'avatar'
};

export type MediaType = (typeof MEDIA_TYPE)[keyof typeof MEDIA_TYPE];
