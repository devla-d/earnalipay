import { createStore } from 'vuex'

export default createStore({
    state: {
        authstatus: false,
        token: '',
        user: null

    },

    mutations: {
        initializestore(state) {
            if (localStorage.getItem('token')) {
                state.token = localStorage.getItem('token')
                state.authstatus = true

            } else {
                state.token = ''
                state.authstatus = false

            }
        },
        setToken(state, token, user) {
            state.token = token
            state.authstatus = true
            state.user = user
            localStorage.setItem('token', token)
        },
        RemoveToken(state) {
            state.token = ''
            state.user = null
            state.authstatus = false
            localStorage.removeItem('token')
        },

    },
    actions: {},
    modules: {}
})