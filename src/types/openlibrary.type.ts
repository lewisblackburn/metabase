export interface OpenLibrarySearchResponse {
    numFound: number;
    start: number;
    numFoundExact: boolean;
    num_found: number;
    documentation_url: string;
    q: string;
    offset: any;
    docs: OpenLibraryDoc[];
}

export interface OpenLibraryDoc {
    author_key?: string[];
    author_name?: string[];
    cover_edition_key?: string;
    cover_i?: number;
    edition_count: number;
    first_publish_year?: number;
    has_fulltext: boolean;
    ia?: string[];
    ia_collection_s?: string;
    key: string;
    language?: string[];
    lending_edition_s?: string;
    lending_identifier_s?: string;
    public_scan_b: boolean;
    title: string;
    subtitle?: string;
}

export interface OpenLibraryAuthor {
    personal_name: string;
    key: string;
    entity_type: string;
    birth_date: string;
    links: OpenLibraryLink[];
    alternate_names: string[];
    name: string;
    remote_ids: OpenLibraryRemoteIds;
    type: OpenLibraryType;
    title: string;
    bio: string;
    fuller_name: string;
    source_records: string[];
    photos: number[];
    latest_revision: number;
    revision: number;
    created: OpenLibraryCreated;
    last_modified: OpenLibraryLastModified;
}

export interface OpenLibraryLink {
    title: string;
    url: string;
    type: OpenLibraryType;
}

export interface OpenLibraryType {
    key: string;
}

export interface OpenLibraryRemoteIds {
    viaf: string;
    goodreads: string;
    storygraph: string;
    isni: string;
    librarything: string;
    amazon: string;
    wikidata: string;
}

export interface OpenLibraryCreated {
    type: string;
    value: string;
}

export interface OpenLibraryLastModified {
    type: string;
    value: string;
}

export interface OpenLibraryWork {
    description: OpenLibraryWorkDescription;
    links: OpenLibraryLink[];
    title: string;
    covers: number[];
    subject_places: string[];
    subject_people: string[];
    key: string;
    authors: OpenLibraryAuthor[];
    excerpts: OpenLibraryWorkExcerpt[];
    type: OpenLibraryType;
    subjects: string[];
    subject_times: string[];
    latest_revision: number;
    revision: number;
    created: OpenLibraryCreated;
    last_modified: OpenLibraryLastModified;
}

export interface OpenLibraryWorkDescription {
    type: string;
    value: string;
}

export interface OpenLibraryLink {
    title: string;
    url: string;
    type: Type;
}

export interface Type {
    key: string;
}

export interface OpenLibraryAuthor {
    author: OpenLibraryType;
    type: OpenLibraryType;
}

export interface OpenLibraryWorkExcerpt {
    excerpt: string;
    comment: string;
    author: OpenLibraryType;
}
