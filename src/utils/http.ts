export async function get<T>(url: string) {
    const response = await fetch(url)
    
    if(!response.ok) {
        throw new Error(response.statusText)
    }

    const data = await response.json() as T

    return data
}

export async function post(url: string, data: any): Promise<Response> {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    
        if(!response.ok) {
            throw new Error(response.statusText)
        }

        return response
    } catch (error) {
        throw new Error(`Undefined error occurred: ${error}`)
    }

}