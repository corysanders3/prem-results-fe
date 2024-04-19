function getPremData(endpoint: string) {
    return fetch(`https://prem-server-80f72a145ae6.herokuapp.com/api/v1/${endpoint}`)
        .then(res => {
            if(!res.ok) {
                throw new Error('Unable to get football data right now.')
            }
            return res.json()
        })
}

export { getPremData };