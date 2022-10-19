export interface ArtistSearch {
    artists: Artists;
    tracks:  Tracks;
}

export interface Artists {
    href:     string;
    items:    ArtistsItem[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: string;
    total:    number;
}

export interface ArtistsItem {
    external_urls: ExternalUrls;
    followers:     Followers;
    genres:        any[];
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    popularity:    number;
    type:          ArtistType;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href:  null;
    total: number;
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export enum ArtistType {
    Artist = "artist",
}

export interface Tracks {
    href:     string;
    items:    TracksItem[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: string;
    total:    number;
}

export interface TracksItem {
    album:         Album;
    artists:       Artist[];
    disc_number:   number;
    duration_ms:   number;
    explicit:      boolean;
    external_ids:  ExternalIDS;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    is_local:      boolean;
    is_playable:   boolean;
    name:          Name;
    popularity:    number;
    preview_url:   null | string;
    track_number:  number;
    type:          PurpleType;
    uri:           string;
}

export interface Album {
    album_type:             AlbumTypeEnum;
    artists:                Artist[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           string;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumTypeEnum;
    uri:                    string;
}

export enum AlbumTypeEnum {
    Album = "album",
    Compilation = "compilation",
}

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name:          string;
    type:          ArtistType;
    uri:           string;
}

export enum ReleaseDatePrecision {
    Day = "day",
    Year = "year",
}

export interface ExternalIDS {
    isrc: string;
}

export enum Name {
    Doxy = "Doxy",
}

export enum PurpleType {
    Track = "track",
}
