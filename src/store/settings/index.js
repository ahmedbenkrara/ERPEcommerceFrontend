import settingsGetters from './getters'
import settingsMutations from './mutations'
import settingsActions from './actions'

const settingsModule = {
    namespaced : true,
    state : {
        data: {
            social: {
                facebook: "",
                linkedin: "",
                twitter: "",
                instagram: ""
            },
            about: {
                who: "",
                why: ""
            },
            map: "",
            description : ""
        },
        success : ''
    },
    getters: settingsGetters,
    mutations: settingsMutations,
    actions: settingsActions
}

export default settingsModule