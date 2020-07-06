Blog API
===

## 登入

### Request

說明：登入。

方法：**Post**

URL：

```
http://127.0.0.1:5000/user/signIn
```

參數：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| username | String | 用戶名 |
| password | String | 密碼 |

#### Success 200

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 包含 token 結果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "Sign In",
	"msg": "Sign In success",
	"data": {
		"token": "sdhlshfshfljshlfjkshklfjhs"
	}
}
```

#### Error 4xx

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 無 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "",
	"msg": "ERROR message",
	"data": null
}
```

## 註冊

### Request

說明：註冊。

方法：**Post**

URL：

```
http://127.0.0.1:5000/user/signUp
```

參數：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| username | String | 用戶名 |
| email | String | Email |
| password | String | 密碼 |

#### Success 200

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 註冊結果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "Sign Up",
	"msg": "Sign Up success",
	"data": null
}
```

#### Error 4xx

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 無 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "",
	"msg": "ERROR message",
	"data": null
}
```


## 检查账号

### Request

說明：检查该账号是否已经被注册。

方法：**Post**

URL：

```
http://127.0.0.1:5000/user/username_verify
```

參數：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| username | String | 用戶名 |

#### Success 200

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 检查結果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "Check username",
	"msg": "Check username success",
	"data": true
}
```

#### Error 4xx

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 無 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "",
	"msg": "ERROR message",
	"data": false
}
```



## 驗證 Email

### Request

說明：Email 驗證。

方法：**Post**

URL：

```
http://127.0.0.1:5000/user/email_verify
```

參數：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| email | String | Email |
| captcha | String | 驗證碼 |

#### Success 200

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 註冊結果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "Forgot password",
	"msg": "change password success",
	"data": true
}
```

#### Error 4xx

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 無 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "",
	"msg": "ERROR message",
	"data": false
}
```

## 找回密碼

### Request

說明：Email 找回密碼。

方法：**Post**

URL：

```
http://127.0.0.1:5000/user/forgot_password
```

參數：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| email | String | Email |

#### Success 200

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 註冊結果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "Email verify",
	"msg": "Email verify success",
	"data": true
}
```

#### Error 4xx

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 無 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "",
	"msg": "ERROR message",
	"data": false
}
```

## 用戶登出

### Request

說明：用戶登出。

方法：**Post**

URL：

```
http://127.0.0.1:5000/user/sign_out
```

參數：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| id | String | 用戶 id |

#### Success 200

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 註冊結果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "sign out",
	"msg": "sign out success",
	"data": true
}
```

#### Error 4xx

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 無 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "",
	"msg": "ERROR message",
	"data": false
}
```

## 刪除用戶

### Request

說明：用戶刪除。

方法：**Delete**

URL：

```
http://127.0.0.1:5000/user/delete_account
```

參數：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| id | String | 用戶 id |
| password | String | 用戶密碼 |

#### Success 200

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 註冊結果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "delete account",
	"msg": "delete account success",
	"data": true
}
```

#### Error 4xx

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 無 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "delete account",
	"msg": "ERROR message",
	"data": false
}
```

## 獲取博客列表

### Request

說明：獲取博客列表。

方法：**Get**

URL：

```
http://127.0.0.1:5000/blog/get_blog_list
```

參數：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| id | String | 用戶 id |

#### Success 200

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 註冊結果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "get blog list",
	"msg": "get blog list success",
	"data": {
        "id": "",
        "content": "",
        "post_time": "",
        "user_id": "",
    }
}
```

#### Error 4xx

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 無 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "",
	"msg": "ERROR message",
	"data": null
}
```


## 编写Blog

### Request

说明：撰写Blog后的上传

请求方法：**Post**

URL：

```
http://xx.com/api/user/upload_blog
```

#### 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|username |是  |string |用户名   |
|blogname |是  |string |博客标题  |
|content  |是  |string |内容     |
|tags     |否  |string |标签     |

### Respon

#### Success 200
| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 提交结果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "Upload blog",
	"msg": "Upload success",
	"data": null
}
```

#### Error 

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 無 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "",
	"msg": "ERROR message",
	"data": null
}
```

## 博客删除

### Request

說明：獲取博客列表。

方法：**Delete**

URL：

```
http://127.0.0.1:5000/blog/delete_blog
```

參數：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| user_id | String | 用戶 id |
| blog_id| String | 博客 id |

#### Success 200

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 註冊結果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "delete blog",
	"msg": "delete blog success",
	"data": true
}
```

#### Error 4xx

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 無 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "",
	"msg": "ERROR message",
	"data": false
}
```

## 文件上传

### Request

说明：文件上传

请求方法：**Post**

URL：

```
http://xx.com/api/user/upload_file
```

#### 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|username |是  |string |用户名   |
|blogname |是  |string |博客标题  |
|content  |否  |string |说明     |
|file     |是  |string |文件 转成流|
|tags     |否  |string |标签     |

### Respon

#### Success 200
| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 提交结果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "Upload file",
	"msg": "Upload file success",
	"data": null
}
```

#### Error 

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 無 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "",
	"msg": "ERROR message",
	"data": null
}```


## 文档存储
### Request

说明：临时存储已经编写好的文档

请求方法：**Post**

URL：

```
http://xx.com/api/user/save_md
```

#### 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|username |是  |string |用户名   |
|blogname |否  |string |博客标题  |
|content  |是  |string |内容     |
|tags     |否  |string |标签     |

### Respon

#### Success 200
| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 提交结果 |

**Success-Response:**

​```json
{
	"code": 200,
	"name": "save current md",
	"msg": "save already",
	"data": null
}
```

#### Error 

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 無 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "",
	"msg": "ERROR message",
	"data": null
}
```




## 个人信息查看

### Request

說明：返回個人信息。

方法：**Put**

URL：

```
http://127.0.0.1:5000/user/get_data
```

參數：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| id | String | 用戶 id |

#### Success 200

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 註冊結果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "get user data",
	"msg": "get user data success",
	"data": {
        "username": "",
        "email": ""
    }
}
```

#### Error 4xx

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 無 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "",
	"msg": "ERROR message",
	"data": null
}
```



## 个人信息修改

### Request

說明：个人信息的修改。

方法：**Post**

URL：

```
http://127.0.0.1:5000/user/change_data
```

參數：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| username | String | 用戶名 |
| password | String | 密碼 |
| email | String | Email |

#### Success 200

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 修改结果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "Change user data",
	"msg": "Change user data success",
	"data": null
}
```

#### Error 4xx

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 無 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "ERROR",
	"msg": "Change failed",
	"data": null
}
```

## 接口訪問測試

### Request

說明：访问验证接口，是否可以访问。

方法：**Get**

URL：

```
http://127.0.0.1:5000/blog/test_interface
```

參數：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| interface_id | String | 接口 id |

#### Success 200

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 註冊結果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "test interface",
	"msg": "test interface success",
	"data": true
}
```

#### Error 4xx

| 欄位 | 類型   | 描述     |
| ---- | ------ | -------- |
| code | Int    | 狀態碼   |
| name | String | 請求名稱 |
| msg  | String | 返回信息 |
| data | null   | 無       |

**Error-Response:**

```json
{
	"code": 500,
	"name": "",
	"msg": "ERROR message",
	"data": false
}
```







## 上传需要监听的网站接口
### Request

说明：添加监听的网站

请求方法：**Post**

URL：

```
http://xx.com/api/user/upload_listen_web
```

#### 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|username |是  |string |用户名     |
|listener_name  |否  |string |给监听器命名|
|address  |是  |string |地址    |

### Respon

#### Success 200
| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | Object | 提交结果 |

**Success-Response:**

```json
{
	"code": 200,
	"name": "add listener",
	"msg": "add listener success",
	"data": null
}
```

#### Error 

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| code | Int | 狀態碼 |
| name | String | 請求名稱 |
| msg | String | 返回信息 |
| data | null | 无 |

**Error-Response:**

```json
{
	"code": 500,
	"name": "",
	"msg": "ERROR message",
	"data": null
}
```
