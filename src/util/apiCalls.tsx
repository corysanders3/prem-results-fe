function getPremData(endpoint: string) {
    return fetch(`https://prem-results-api.vercel.app/api/v1/${endpoint}`)
        .then(res => {
            if(!res.ok) {
                throw new Error('Unable to get football data right now.')
            }
            return res.json()
        })
}

export { getPremData };