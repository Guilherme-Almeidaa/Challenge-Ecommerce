const products = [
    {
        "id": 312,
        "name": "Super Mario Odyssey",
        "price": 197.88,
        "score": 100,

    },
    {
        "id": 201,
        "name": "Call Of Duty Infinite Warfare",
        "price": 49.99,
        "score": 80,

    },
    {
        "id": 102,
        "name": "The Witcher III Wild Hunt",
        "price": 119.5,
        "score": 250,

    },
    {
        "id": 99,
        "name": "Call Of Duty WWII",
        "price": 249.99,
        "score": 205,

    },
    {
        "id": 12,
        "name": "Mortal Kombat XL",
        "price": 69.99,
        "score": 150,

    },
    {
        "id": 74,
        "name": "Shards of Darkness",
        "price": 71.94,
        "score": 400,

    },
    {
        "id": 31,
        "name": "Terra Média: Sombras de Mordor",
        "price": 79.99,
        "score": 50,

    },
    {
        "id": 420,
        "name": "FIFA 18",
        "price": 195.39,
        "score": 325,

    },
    {
        "id": 501,
        "name": "Horizon Zero Dawn",
        "price": 115.8,
        "score": 290,
    }
]

const filterOrder = (products, filter, sort) => {
    if (sort === "crescente") return products.sort((a, b) => {
        if (a[filter] > b[filter]) return 1
        if (a[filter] < b[filter]) return -1
        return 0
    })
    if (sort === "decrescente") return products.sort((a, b) => {
        if (a[filter] < b[filter]) return 1
        if (a[filter] > b[filter]) return -1
        return 0
    })
}
const se = products.find((item) => item.id === 312)

const result = products.splice(se, 1)

console.log(result)