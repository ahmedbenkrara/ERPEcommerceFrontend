const settingsMutations = {
    setSettings(state, payload){
        state.data = payload
    },
    setSettingsSuccess(state, payload){
        state.success = payload
    }
}

export default settingsMutations