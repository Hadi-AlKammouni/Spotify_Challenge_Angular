export interface Albums {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    album_group:            AlbumGroup;
    album_type:             AlbumGroup;
    artists:                Artist[];
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           Date;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumGroup;
    uri:                    string;
}

export enum AlbumGroup {
    Album = "album",
    Single = "single",
}

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            ID;
    name:          Name;
    type:          Type;
    uri:           URI;
}

export interface ExternalUrls {
    spotify: string;
}

export enum ID {
    The1BdNMMgvK4D6ZreFzO7TdW = "1BdNMMgvK4d6zreFzO7TdW",
    The2O5JDhtHVPhrJdv3CEQ99Z = "2o5jDhtHVPhrJdv3cEQ99Z",
    The2TxHhyCwHjUEpJjWrEyqyX = "2txHhyCwHjUEpJjWrEyqyX",
    The5FiYAV2DWASxAUKDq7Gbe9 = "5fiYAV2DWASxAUKDq7Gbe9",
}

export enum Name {
    Locus = "Locus",
    LucaSchreiner = "Luca Schreiner",
    Tiësto = "Tiësto",
    TomOdell = "Tom Odell",
}

export enum Type {
    Artist = "artist",
}

export enum URI {
    SpotifyArtist1BdNMMgvK4D6ZreFzO7TdW = "spotify:artist:1BdNMMgvK4d6zreFzO7TdW",
    SpotifyArtist2O5JDhtHVPhrJdv3CEQ99Z = "spotify:artist:2o5jDhtHVPhrJdv3cEQ99Z",
    SpotifyArtist2TxHhyCwHjUEpJjWrEyqyX = "spotify:artist:2txHhyCwHjUEpJjWrEyqyX",
    SpotifyArtist5FiYAV2DWASxAUKDq7Gbe9 = "spotify:artist:5fiYAV2DWASxAUKDq7Gbe9",
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export enum ReleaseDatePrecision {
    Day = "day",
}
