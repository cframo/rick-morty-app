import React from "react";

export interface ICharacter {
    id: number
    name: string,
    type: string,
    species: string,
    gender: string,
    image: string
}

interface IInfo {
    loading: boolean;
    error?: string;
}

export type GeneralCardProps = {
    type: string;
    characters: IInfo;
    episodes: IInfo;
    locations: IInfo;
}

export type GeneralCardCharactersProps = {
    characters: ICharacter[];
    show: boolean;
    setShow: (show: boolean) => void;
}

export type GeneralCardEpisodesProps = {
    episodes: IEpisodes[];
    show: boolean;
    setShow: (show: boolean) => void;
}

export type GeneralCardLocationProps = {
    locations: ILocations[];
    show: boolean;
    setShow: (show: boolean) => void;
}

export type DetailedCharacterProps = {
    character: ICharacter,
}

export interface IResidents {
    id: number,
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

export type DetailedLocationProps = {
    location: ILocations,
}

export interface IEpisodes {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: IResidents[]
}

export type DetailedEPisodeProps = {
    episode: IEpisodes,
}

export type DetailedCardProps = {
    show: boolean,
    type: string,
    episode?: IEpisodes,
    character?: ICharacter,
    location?: ILocations,
    setShow: (show: boolean) => void,
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

export type NavigationBrandProp = {
    classname: string;
}

export interface Style {
    ButtonGroupFoot: string;
    classnameDrop: string;
    dropdownVariant: string;
    size: 'sm'| 'lg' | undefined;
    formControlWidth: string
    buttonGroupHead: string
}

export type ButtonsBarProps = {
    leftButtons: boolean;
    location?: string;
    setLocationAction?: (location: string) => void;
    style: Style,
    type: boolean,
    searchByType: (type: boolean) => void;
    searchByWords: (key: React.ChangeEvent<HTMLInputElement>) => void;
    keySearch: string;
    validadteString: (value: string) => boolean;
    clear: () => void;

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