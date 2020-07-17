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
        verifyEmailURL: "/user/email_verify",
        forgotPasswordURL: "/user/find_passwd",
        // account setting
        getUserDataURL: "/user/get_data",
        updateUserUrl: '/user/change_data',
        updateUsernameURL: "/user/change_data",
        updateEmailURL: "/user/change_data",
        verityNewEmailURL: "/user/email_verify",
        updateSexURL: "/user/change_data",
        updateCompanyURL: "/user/change_data",
        updateBirthdayURL: "/user/change_data",
        updateDescriptionURL: "/user/change_data",
        updatePasswordURL: "/user/change_data",
        // posts
        createNewPostURL: "/insertBlog",
        updatePostURL: "/updateBlog",
        deletePostURL: "/deleteBlog",
        searchPostURL: "",
        getPostsURL: "/getBlogListByUser",
        getPostByBlogIdURL: "/getBlogById",
        getPostByUsernameURL: "/getBlogListByUsername",
        getAllTagsByUserIdURL: "/pub/user_tags",
        // collect
        addCollectURL: "/insertCollect",
        searchCollectURL: "",
        deleteCollectURL: "/deleteCollect",
        getCollectURL: "/getCollectListByUser",
        getAllCollectTagsByUserIdURL: "/pub/collect_tags",
        // tags
        addNewTagURL: "/insertTag",
        deleteTagURL: "/deleteTag",
        // comment
        getCommentByBlogIdURL: "/getCommentListByBlog",
        addNewCommentURL: "/insertComment",
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