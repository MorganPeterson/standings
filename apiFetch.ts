async function apiFetch<T>(url: string, headers: RequestInit): Promise<T> {
    return fetch(url, headers)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .catch((err: Error) => {
            console.error(err)
            throw err
        })
}

export default apiFetch
