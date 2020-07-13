const api = {
    state: {
        // spring flask base url
        springBaseURL: "http://127.0.0.1:8090",
        flaskBaseURL: "http://127.0.0.1:5000",
        // account signIn signUp
        signInURL: "/user/signIn",
        signUpURL: "/user/signUp",
        // check the username if it is exist
        usernameVerifyURL: "/user/username_verify",
        verifyEmailURL: "",
        forgotPasswordURL: "",
        // account setting
        getUserData: " /user/get_data",
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