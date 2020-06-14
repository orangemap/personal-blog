import 'whatwg-fetch'
// import { MessageBox } from 'element-ui'
export default {
  fetch(url, options = {}) {
    options.reqOptions = options.reqOptions || {}
    var reqOptions = options.reqOptions
    reqOptions.headers = reqOptions.headers || {}
    reqOptions.headers = Object.assign(
      {
        'Content-Type': 'application/json',
        Authorization: 'Tenant=5678efgh Credential=5678efgh/credential-scope',
        Accept: 'application/json'
      },
      reqOptions.headers
    )
    reqOptions.method = 'GET'
    reqOptions.credentials = 'same-origin'
    return Promise.resolve(
      fetch(url, reqOptions).then(function(response) {
        console.log(response)
        if (response.ok) {
          return response.json().then(function(body) {
            if (body.code === 200 || body.code === 0) {
              return body.data
            } else {
              throw {
                response: body
              }
            }
          })
        }
        var error = new Error(response.statusText)
        error.response = response
        throw error
      })
    ).then(null, error => {
      throw error
    })
  },
  post(url, params, options = {}) {
    options.reqOptions = options.reqOptions || {}
    var reqOptions = options.reqOptions
    reqOptions.headers = reqOptions.headers || {}
    reqOptions.headers = Object.assign(
      {
        'Content-Type': 'application/json',
        Authorization: 'Tenant=5678efgh Credential=5678efgh/credential-scope',
        Accept: 'application/json'
      },
      reqOptions.headers
    )
    reqOptions.method = 'POST'
    reqOptions.body = JSON.stringify(params)
    return fetch(url, reqOptions)
      .then(response => {
        return response.json().then(body => {
          console.log(body)
          if (body.result) {
            let result = body.result
            if (result.error && options.opexApiShowMsg) {
              // MessageBox({
              //   title: '错误提示',
              //   message: `${result.error.message}`
              // })
              return Promise.reject(result.error)
            }
            return result
          }
        })
      })
      .catch(error => {
        throw error
      })
  }
}
