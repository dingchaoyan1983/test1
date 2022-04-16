import qs from 'qs';

enum Method {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
}

type CommonFetchType = <T>(method: Method, url: string, data?: Record<string, any>, options?: Omit<Request, 'method'| 'body' | 'headers'>)=> Promise<T>;

const commonFetch: CommonFetchType = (method, url, data, options) => fetch(url, {
  method: method,
  headers: {
    'Content-Type': 'application/json'
  },
  body:  data !== undefined ? JSON.stringify(data) : undefined, // body data type must match "Content-Type" header,
  ...options,
}).then(response => {
  if (response.ok && response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    throw response.toString();
  }
}).catch((e) => {
  //打印错误信息
  console.error(e);
  throw e;
});

export const get= <T>(url: string, data?: Record<string, any>) => commonFetch<T>(
  Method.GET,
  data && Object.keys(data).length > 0 ? `${url}?${qs.stringify(data, { arrayFormat: 'brackets' })}` : url,
);

export const post = <T>(url: string, data?: Record<string, any>) => commonFetch<T>(
  Method.POST,
  url,
  data,
);

export const put = <T>(url: string, data?: Record<string, any>) => commonFetch<T>(
  Method.PUT,
  url,
  data,
);

export const del = <T>(url: string, data?: Record<string, any>) => commonFetch<T>(
  Method.DELETE,
  data && Object.keys(data).length > 0 ? `${url}?${qs.stringify(data, { arrayFormat: 'brackets' })}` : url,
);



