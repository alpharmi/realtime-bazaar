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
                    product.style.order = 999
                    product.id = i

                    const productName = document.createElement("h1")
                    productName.className = "productName"
                    productName.textContent = i.replaceAll("_", " ").replaceAll(":", " ")
                    product.appendChild(productName)

                    const buyPrice = document.createElement("h1")
                    buyPrice.className = "productProperty"
                    buyPrice.id = "buyPrice"
                    buyPrice.textContent = "Buy Price: $0"
                    product.appendChild(buyPrice)

                    const sellPrice = document.createElement("h1")
                    sellPrice.className = "productProperty"
                    sellPrice.id = "sellPrice"
                    sellPrice.textContent = "Sell Price: $0"
                    product.appendChild(sellPrice)

                    const quanityBuying = document.createElement("h1")
                    quanityBuying.className = "productProperty"
                    quanityBuying.id = "quanityBuying"
                    quanityBuying.textContent = "Quanity Buying: 0"
                    product.appendChild(quanityBuying)

                    const quanitySelling = document.createElement("h1")
                    quanitySelling.className = "productProperty"
                    quanitySelling.id = "quanitySelling"
                    quanitySelling.textContent = "Quanity Selling: 0"
                    product.appendChild(quanitySelling)

                    const profitMargin = document.createElement("h1")
                    profitMargin.className = "productProperty"
                    profitMargin.id = "profitMargin"
                    profitMargin.textContent = "Profit Margin: 0 (0%)"
                    product.appendChild(profitMargin)

                    const profitMargin1024x = document.createElement("h1")
                    profitMargin1024x.className = "productProperty"
                    profitMargin1024x.id = "profitMargin1024x"
                    profitMargin1024x.textContent = "Profit Margin (1024x): 0 (0%)"
                    product.appendChild(profitMargin1024x)

                    gridContainer.appendChild(product)
                }
            }
            console.log(data)
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