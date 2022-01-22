var lastUpdated = 0

function requestBazaar() {
    fetch("https://api.hypixel.net/skyblock/bazaar?key=c444d327-f804-4aea-88ad-798e0eb98533")
        .then(response => response.json()).then(data => {
            if (data.success && data.lastUpdated != lastUpdated) {
                lastUpdated = data.lastUpdated

                const products = data.products

                for (i in products) {
                    const product = products[i]

                    console.log(product)
                }
            }
        })
}

requestBazaar()