export interface ICharacter {
    id: number
    name: string,
    type: string,
    species: string,
    gender: string,
    image: string
}

export type GeneralCardCharactersProps = {
    characters: ICharacter[];
    loading: boolean;
    error?: string;
}

export type GeneralCardEpisodesProps = {
    episodes: IEpisodes[];
    loading: boolean;
    error?: string;
}

export type GeneralCardLocationProps = {
    locations: ILocations[];
    loading: boolean;
    error?: string;
}

export type DetailCardCharacterProps = {
    show: boolean,
    character: ICharacter,
    handleShow: (character?: ICharacter) => void,
}

export interface IResidents {
    name: string,
    image?: string
}

export interface ILocations {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: IResidents[]
}

export type DetailCardLocationsProps = {
    show: boolean,
    location: ILocations,
    handleShow: (Location?: ILocations) => void,
}

export interface IEpisodes {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: IResidents[]
}

export type DetaildCardEpisodesProps = {
    show: boolean,
    episode: IEpisodes,
    handleShow: (episodes?: IEpisodes) => void,
}

export type ErrorProps = {
    message: string;
}

export interface Idata {
    fetching: boolean,
    data: any,
    current: object,
    nextPage: number,
    pages: number
}

export interface Iaction {
    type: string;
    payload: any;
}

export interface IApp {
    current: string
}

export type state = {
    app: {
        current: string;
    };
    characters : {
        fetching: boolean;
        data: ICharacter[],
        current: object;
        nextPage: number;
        pages: number;
        error?: string;
    };
    locations: {
        fetching: boolean;
        data: ILocations[],
        current: object;
        nextPage: number;
        pages: number;
        error?: string;
    };
    episodes: {
        fetching: boolean;
        data: IEpisodes[],
        current: object;
        nextPage: number;
        pages: number;
        error?: string;
    }

}