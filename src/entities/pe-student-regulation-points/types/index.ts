export interface AddStudentRegulationPoints {
    studentGuid: string
    standardType: RegulationType
    date: string
    pointsAmount: number
    isOverride: boolean
}

export enum RegulationType {
    FlexionAndExtensionOfArms = 'FLEXION_AND_EXTENSION_OF_ARMS', // сгибание и разгибание рук
    JumpingRopeJumps = 'JUMPING_ROPE_JUMPS', // прыжки со скакалкой
    Jumps = 'JUMPS', // прыжки
    PullUps = 'PULL_UPS', // подтягивания
    ShuttleRun = 'SHUTTLE_RUN', // челночный бег
    Squats = 'SQUATS', // приседания
    Tilts = 'TILTS', // наклон
    TorsoLifts = 'TORSO_LIFTS', // подъемы туловища
}
