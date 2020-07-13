const user = {
    state: {
        username: "",
        isSignIn: false,
    },
    mutations: {
        updateUsername(state, username) {
            state.username = username;
        },
        updateIsSignIn(state, isSignIn) {
            state.isSignIn = isSignIn;
        }
    },
    actions: {},
    getters: {}
}

export default user;