export interface GoogleBooksVolumeInfo {
    title: string;
    subtitle?: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    industryIdentifiers?: Array<{
        type: string;
        identifier: string;
    }>;
    pageCount?: number;
    categories?: string[];
    imageLinks?: {
        thumbnail?: string;
        smallThumbnail?: string;
    };
    language?: string;
}

export interface GoogleBooksVolume {
    id: string;
    volumeInfo: GoogleBooksVolumeInfo;
}
