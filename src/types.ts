export interface ICharacter {
    id: number
    name: string,
    type: string,
    species: string,
    gender: string,
    image: string
}

export type DetailCardCharacterProps = {
    show: boolean,
    character: ICharacter,
    handleShow: (event: React.MouseEvent<HTMLButtonElement>) => void,
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
    handleShow: (event: React.MouseEvent<HTMLButtonElement>) => void,
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
    handleShow: (event: React.MouseEvent<HTMLButtonElement>) => void,
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