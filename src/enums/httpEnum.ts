/**
 * @description: 请求结果集
 */
export enum ResultEnum {
    SUCCESS = 200,
    ERROR = -1,
    TIMEOUT = 10042,
    TYPE = 'success',
}

/**
 * @description: 请求方法
 */
export enum RequestEnum {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

/**
 * @description:  常用的contentTyp类型
 */
export enum ContentTypeEnum {
    // json
    JSON = 'application/json;charset=UTF-8',
    // json
    TEXT = 'text/plain;charset=UTF-8',
    // form-data 一般配合qs qs 是一个增加了一些安全性的查询字符串解析和序列化字符串的库
    FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
    // form-data  上传
    FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
