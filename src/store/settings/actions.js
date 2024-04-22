import axios from 'axios'

const settingsActions = {
    async loadSettings({ rootGetters, commit }) {
        try {
            const accessToken = rootGetters['authModule/getToken']
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/settings`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            });

            commit('setSettings', response.data)
            commit('setSettingsSuccess', true)
        } catch (error) {
            commit('setSettingsSuccess', false)
        }
    }
}

export default settingsActions