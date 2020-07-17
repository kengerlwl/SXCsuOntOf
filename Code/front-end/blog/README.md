# Blog

> 中南大學計算機學院 2020-6-29 ~ 2020-7-17 暑期實訓項目

前端負責人：軟件1804黃柏曛(HuangNO1)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 升級套件
```
npm update
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 組件與框架

我們使用以下包依賴：

- **[Vue-cli](https://cli.vuejs.org/zh/guide/)**，一个基于 Vue.js 进行快速开发的完整系统。
- **[Vue-Router](https://router.vuejs.org/zh/installation.html)**，是 Vue.js 官方的路由管理器。用於單頁面子組件。
- **[Bootstrap-vue](https://bootstrap-vue.org/)**，Bootstrap UI 庫。
- **[VueX](https://vuex.vuejs.org/zh/)**，作為 SPA 單頁面組件之間的傳值與各方法，共享數據。
- **[Axios](https://www.npmjs.com/package/vue-axios)**，前端數據請求工具，具有 JQuery Ajax 效果。
- **[MockJS](https://github.com/nuysoft/Mock)**，前端獨立開發時作為攔截 axios 請求，給出隨機數據。
- **[mavon-editor](https://github.com/hinesboy/mavonEditor)**，Markdown 編輯器。
- **[v-charts](https://v-charts.js.org/#/)**，圖表，基于 Vue2.0 和 **echarts** 封装的 **v-charts** 图表组件。
- **[vue-typer](https://github.com/cngu/vue-typer)**，打字效果組件。
- **[markdown-it-vue](https://github.com/ravenq/markdown-it-vue)**，Markdown 渲染顯示組件。
- **[vue-localstorage](https://www.npmjs.com/package/vue-localstorage)**，LocalStorage plugin inspired by Vue typed props which take a care of typecasting for Vue.js 1 and 2 with SSR support。

## API PATH

API 請求 path 使用 vueX 保存。

**File 位置**：`./src/store/module/api.js`

## 頁面

父組件：**App.vue**

**vue-router 前端路由配置文件**：`./src/router/index.js`

描述：SPA 所有頁面起始點。

### Sign - 登入註冊

頁面目錄：`./src/views/sign`

父組件：**Sign.vue**

Web Path: `/sign`

重定向: `/sign/signIn`

**子路由**

#### SignIn 登入

- 組件：SignIn.vue
- 描述：登入
- Web Path：`/sign/signIn`
- 使用的 API：

| API Name | PATH | 用處 |
| --- | --- | --- |
| springBaseURL | `http://127.0.0.1:8090` | base path |
| signInURL | `/user/signIn` | 登入請求 |

#### SignUp 註冊

- 組件：SignUp.vue
- 描述：註冊
- Web Path：`/sign/signUp`
- 使用的 API：

> 先驗證用戶名相同問題，如果不存在相同用戶名就進行註冊請求。

| API Name | PATH | 用處 |
| --- | --- | --- |
| springBaseURL | `http://127.0.0.1:8090` | base path |
| usernameVerifyURL | `/user/username_verify` | 判斷是否用戶名相同 |
| signUpURL | `/user/signUp` | 註冊請求 |

#### verifyEmail Email 驗證

- 組件：verifyEmail.vue
- 描述：驗證註冊的 Email
- Web Path：`/sign/verifyEmail`
- 使用的 API：

| API Name | PATH | 用處 |
| --- | --- | --- |
| springBaseURL | `http://127.0.0.1:8090` | base path |
| verifyEmailURL | `/user/email_verify` | 驗證發送到 Email 的 Captcha |

#### forgotPassword 忘記密碼 

- 組件：forgotPassword.vue
- 描述：找回密碼
- Web Path：`/sign/forgotPassword`
- 使用的 API：

| API Name | PATH | 用處 |
| --- | --- | --- |
| springBaseURL | `http://127.0.0.1:8090` | base path |
| forgotPasswordURL | `/user/find_passwd` | 找回密碼 |

### home - 宣傳頁面

頁面目錄：`./src/views/home`

描述：作為進入 Web 頁面的第一個頁面，作為宣傳用途

組件：Home.vue

Web Path：`/`

### blog-admin - Blog 管理界面

頁面目錄：`./src/views/blog-admin`

父組件：**admin.vue**

Web Path：`/:id/admin`

重定向：`/:id/admin/charts`

**子路由**

#### charts 數據可視化

- 組件：charts.vue
- 描述：將博客的訪問量進行可視化
- Web Path：`/:id/admin/charts`
- 使用的 API：

| API Name | PATH | 用處 |
| --- | --- | --- |
| springBaseURL | `http://127.0.0.1:8090` | base path |
| getPostsURL | `/getBlogListByUser` | 使用 user_id 獲取 blog list |

#### posts 自己的文章管理

- 組件：posts.vue
- 描述：自己的文章進行編輯管理、增刪改查
- Web Path：`/:id/admin/posts`
- 使用的 API：

| API Name | PATH | 用處 |
| --- | --- | --- |
| springBaseURL | `http://127.0.0.1:8090` | base path |
| getPostsURL | `/getBlogListByUser` | 使用 user_id 獲取 blog list |
| deletePostURL | `/deleteBlog` | 根據 blog_id 刪除 blog |
| getAllTagsByUserIdURL | `/pub/user_tags` | 使用 user_id 獲取 blog list 中所有的 tags |
| addNewTagURL | `/insertTag` | 插入新的 Tag |
| deleteTagURL | `/deleteTag` | 刪除新的 Tag |

#### collect 自己收藏的文章

- 組件：collect.vue
- 描述：自己收藏的博客管理
- Web Path：`/:id/admin/collect`
- 使用的 API：

| API Name | PATH | 用處 |
| --- | --- | --- |
| springBaseURL | `http://127.0.0.1:8090` | base path |
| getCollectURL | `/getCollectListByUser` | 根據 uer_id 獲取 collection list |
| getAllCollectTagsByUserIdURL | `/pub/collect_tags` | 根據 user_id 獲取所有收藏的 blog tags list |
| deleteCollectURL | `/deleteCollect` | 刪除收藏的博客 |

#### edit 自己的文章編輯頁面

- 組件：edit.vue
- 描述：文章編輯
- Web Path：`/:id/admin/posts/post_edit`
- 使用的 API：

| API Name | PATH | 用處 |
| --- | --- | --- |
| springBaseURL | `http://127.0.0.1:8090` | base path |
| getPostByBlogIdURL | `/getBlogById` | 根據 blog_id 獲取該 blog 的內容 |
| updatePostURL | `/updateBlog` | 更新 blog |
| createNewPostURL | `/insertBlog` | 創建新的 blog |

#### account 自己的用戶信息編輯管理

- 組件：account.vue
- 描述：用戶管理
- Web Path：`/:id/admin/account`
- 使用的 API：

> 因為用戶的更新都是同一個 path，所以下面就只列一個，雖然項目中使用的變量名稱不一樣，但值都是一樣的。

| API Name | PATH | 用處 |
| --- | --- | --- |
| springBaseURL | `http://127.0.0.1:8090` | base path |
| getUserDataURL | `/user/get_data` | 獲取用戶資訊 |
| updateUserUrl | `/user/change_data` | 更新用戶資料 |

### blog-view - Blog 檢視頁面

頁面目錄：`./src/views/blog-view`

父組件：無

**子路由**

#### home 博客首頁

- 組件：home.vue
- 描述：個人博客的首頁
- Web Path：`/:id/blog/home`
- 使用的 API：

| API Name | PATH | 用處 |
| --- | --- | --- |
| springBaseURL | `http://127.0.0.1:8090` | base path |
| getAllTagsByUserIdURL | `/pub/user_tags` | 使用 user_id 獲取 blog list 中所有的 tags |
| getPostByUsernameURL | `/getBlogListByUsername` | 根據 user_name 獲取該 blog list |

#### read 閱讀頁面

- 組件：read.vue
- 描述：文章閱讀、收藏、評論
- Web Path：`/:id/blog/read`
- 使用的 API：

| API Name | PATH | 用處 |
| --- | --- | --- |
| springBaseURL | `http://127.0.0.1:8090` | base path |
| getPostByBlogIdURL | `/getBlogById` | 根據 blog_id 獲取該 blog 的內容 |
| getCommentByBlogIdURL | `/getCommentListByBlog` | 根據 blog_id 獲取 blog 的所有 comments |
| addCollectURL | `/insertCollect` | 添加 collection |
| addNewCommentURL | `/insertComment` | 添加新的評論 |

#### about 關於博客主

- 組件：about.vue
- 描述：關於博客主的信息
- Web Path：`/:id/blog/about`
- 使用的 API：

| API Name | PATH | 用處 |
| --- | --- | --- |
| springBaseURL | `http://127.0.0.1:8090` | base path |
| getUserDataURL | `/user/get_data` | 獲取用戶資訊 |

### error - 404 頁面

頁面目錄：`./src/views/error`

描述：客製化的 404 頁面

組件：pageNotFound.vue

Web Path：不存在的路徑

### news - 新聞模塊頁面

頁面目錄：`./src/views/news`

父組件：news.vue

Web Path：`/news`

重定向：`/news/school`

**子路由**

#### school 學校新聞

- 組件：about.vue
- 描述：關於博客主的信息
- Web Path：`/news/school`
- 使用的 API：

| API Name | PATH | 用處 |
| --- | --- | --- |
| flaskBaseURL | `http://127.0.0.1:5000` | base path |
| getSchoolNewsURL | `/getNews` | 獲取 CSU CS 新聞 |

#### game 遊戲消息

- 組件：about.vue
- 描述：關於博客主的信息
- Web Path：`/news/game`
- 使用的 API：

| API Name | PATH | 用處 |
| --- | --- | --- |
| flaskBaseURL | `http://127.0.0.1:5000` | base path |
| getGamesNewsURL | `/getEpicFreeGame` | 獲取 EPIC 免費遊戲新聞 |

## 感謝小組成員們的共同參與