import {ICharacter, IEpisodes, ILocations, IResidents} from "./types";

export const emptyCharacter : ICharacter = {
    id: 0,
    name: "",
    type: "",
    species: "",
    gender: "",
    image: "",
}

export const emptyResidents: IResidents[] = [
    {
        id: 0,
        name: "",
        image: ""
    }
]

export const emptyEpisode: IEpisodes = {
    id: 0,
    name: "",
    air_date: "",
    episode: "",
    characters: emptyResidents
}

export const emptyLocation: ILocations = {
    id: 0,
    name: "",
    type: "",
    dimension: "",
    residents: emptyResidents
}