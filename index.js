const gridContainer = document.getElementById("grid-container")

var lastUpdated = 0

function loadBazaar() {
    fetch("https://api.hypixel.net/skyblock/bazaar?key=c444d327-f804-4aea-88ad-798e0eb98533") //I couldnt care less you have my api key
        .then(response => response.json()).then(data => {
            if (data.success) {
                const products = data.products

                for (i in products) {
                    const productInfo = products[i]

                    const product = document.createElement("div")
                    product.className = "grid-item"
                    gridContainer.appendChild(product)
                }
            }
        })
}

function requestBazaar() {
    fetch("https://api.hypixel.net/skyblock/bazaar?key=c444d327-f804-4aea-88ad-798e0eb98533") //I couldnt care less you have my api key
        .then(response => response.json()).then(data => {
            if (data.success && data.lastUpdated != lastUpdated) {
                lastUpdated = data.lastUpdated

                const products = data.products
                var productsSorted = []

                for (i in products) {
                    const productInfo = products[i]
                    var product = {name: productInfo.product_id}
                    var productScore = 0

                }
            }
        })
}

loadBazaar()

//requestBazaar()