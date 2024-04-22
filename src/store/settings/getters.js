const settingsGetters = {
    getSettings(state){
        return state.data
    },
    getSettingsSuccess(state){
        return state.success
    }
}

export default settingsGetters