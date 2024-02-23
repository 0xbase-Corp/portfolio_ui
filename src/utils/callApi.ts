async function callApi(endpoint: string, method: string = 'GET', body: any = null, options: RequestInit = {}) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL}${endpoint}`
  try {
    const config: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    if (body) {
      config.body = JSON.stringify(body)
    }

    const response = await fetch(url, config)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    console.error('There was an error with the fetch operation:', error)
    throw error
  }
}

export default callApi
