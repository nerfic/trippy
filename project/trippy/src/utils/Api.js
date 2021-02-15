const config = {
    host: "http://localhost:3002"
}

const getHomeData = () => {
    fetch(config.host + "/api/home")
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
}

export default getHomeData