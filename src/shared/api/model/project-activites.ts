export interface Projects {
    [key: string]: Project
}

export interface Project {
    about: Info
    curator: Curator
    scores: Scores
    participants: Participant[]
}

export interface Info {
    name: string
    stars: number
    describe: string
    theme: string
}

export interface Curator {
    id: string
    name: string
    img: string
    describe: string
}

export interface Scores {
    [key: string]: number
}

export interface Participant {
    id: string
    name: string
    img: string
    link: string
}
