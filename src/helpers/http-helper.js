/* eslint-disable prefer-promise-reject-errors */
export const httpHelper = () => {
  const customFetch = async (endpoint, options) => {
    const defaultHeader = {
      accept: 'application/json'
    }

    const controller = new AbortController()
    options.signal = controller.signal

    options.method = options.method || 'GET'
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader

    options.body = JSON.stringify(options.body) || false
    if (!options.body) delete options.body

    setTimeout(() => controller.abort(), 3000)

    try {
      const res = await fetch(endpoint, options)
      return await (
        res.ok
          ? res.json()
          : Promise.reject({
            error: true,
            body: res.json(),
            status: res.status || '00',
            statusText: res.statusText || 'An error occurred while processing the request.'
          }))
    } catch (error) {
      return error
    }
  }

  const get = (url, options = {}) => customFetch(url, options)

  const post = (url, options = {}) => {
    options.method = 'POST'
    return customFetch(url, options)
  }

  const put = (url, options = {}) => {
    options.method = 'PUT'
    return customFetch(url, options)
  }

  const del = (url, options = {}) => {
    options.method = 'DELETE'
    return customFetch(url, options)
  }

  return {
    get,
    post,
    put,
    del
  }
}
