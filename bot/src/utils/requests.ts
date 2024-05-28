import axios from 'axios'


const {
  API_HOST,
  API_USER,
  API_PASS,
} = process.env

const credentials = {
  userlogin: API_USER,
  userpsw: API_PASS
}

const get = async <T>(
  path: string,
  params?: object | URLSearchParams
) => {
  const URL = `${API_HOST + path}?${new URLSearchParams(
    {
      ...credentials,
      ...params
    } as URLSearchParams
  ).toString()}`

  return (
    await axios.get<T>(URL)
  ).data
}

const post = async <T>(props: {
  path: string
  params?: object | URLSearchParams
  data: object
}) => {
  const URL = `${API_HOST + props.path}?${new URLSearchParams(
    {
      ...credentials,
      ...props.params
    } as URLSearchParams
  ).toString()}`

  return (
    await axios.post<T>(
      URL,
      {
        ...credentials,
        ...props.data
      },
    )
  ).data
}

export { get, post }
