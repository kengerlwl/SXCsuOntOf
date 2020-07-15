const user = {
    state: {
        username: "",
        isSignIn: false,
        signOutModal: false,
        tokenVerifyFailModal: false
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
        },
        updateTokenVerifyFailModal(state, tokenVerifyFailModal) {
            state.tokenVerifyFailModal = tokenVerifyFailModal;
        }
    },
    actions: {},
    getters: {}
}

export default user;