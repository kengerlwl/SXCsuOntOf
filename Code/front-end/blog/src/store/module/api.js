const api = {
    state: {
        springBaseURL: "",
        flaskBaseURL: "http://127.0.0.1:5000",
        signInURL: "",
        signUpURL: "",
        verifyEmailURL: "",
        forgotPasswordURL: "",
        // account setting
        updateUsernameURL: "",
        updateEmailURL: "",
        verityNewEmailURL: "",
        updateSexURL: "",
        updateCompanyURL: "",
        updateBirthdayURL: "",
        updateDescriptionURL: "",
        updatePasswordURL: "",
        // posts
        createNewPostURL: "",
        updatePostURL: "",
        deletePostURL: "",
        searchPostURL: "",
        // collect
        addCollectURL: "",
        searchCollectURL: "",
        deleteCollectURL: "",
        // news
        getSchoolNewsURL: "/getNews",
        getGamesNewsURL: "/getEpicFreeGame"
    },
    mutations: {

    },
    actions: {},
    getters: {}
}

export default api;