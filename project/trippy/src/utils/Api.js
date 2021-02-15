const config = {
    host: "http://localhost:3002"
}

const getHomeData = () => {
    return fetch(config.host + "/api/home")
        .then(response => response.json())
}

export default getHomeData