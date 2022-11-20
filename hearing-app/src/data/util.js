export const TestTypes = {
    PureTone :"PureTone",
    MaskedNoise :"MaskedNoise",
    SpatialAudio :"SpatialAudio"
}

export const getIconNameByTestType = (testType) => {
    switch (testType) {
        case TestTypes.PureTone:
            return "music_note";
        case TestTypes.MaskedNoise:
            return "auto_detect_voice";
        case TestTypes.SpatialAudio:
            return "spatial_audio";
        default:
            return "music_note";
    }
}
