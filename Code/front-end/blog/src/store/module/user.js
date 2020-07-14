const user = {
    state: {
        username: "",
        isSignIn: false,
        signOutModal: false,
    },
    mutations: {
        updateUsername(state, username) {
            state.username = username;
        },
        updateIsSignIn(state, isSignIn) {
            state.isSignIn = isSignIn;
        },
        updateSignOutModal(state, signOutModal) {
            state.signOutModal = signOutModal;
        }
    },
    actions: {},
    getters: {}
}

export default user;