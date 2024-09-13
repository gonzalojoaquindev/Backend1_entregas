const ulProducts = document.querySelector("ul")

const getProducts = async () => {
    let params = new URLSearchParams(location.search)
    let page = params.get("page")
    if (!page || isNaN(Number(page))) {
        page = 1
    }

    let res = await fetch(`/api/products?page=${page}`)
    let data = await res.json()
    console.log(data);

    data.products.docs.forEach(p => {
        let liProduct = document.createElement("li")
        liProduct.textContent = `${p.title} - ${p.description} -${p.code}`
        ulProducts.append(liProduct)
    })

    const toFirtsPage = document.createElement("a")
    toFirtsPage.textContent = `Primera pág.`
    toFirtsPage.href = `/products?page=1`
    document.body.append(toFirtsPage)



    const toPrevPage = document.createElement("a")
    toPrevPage.textContent = `< página anterior`
    toPrevPage.href = `/products?page=${data.products.prevPage}`
    if (!data.products.hasPrevPage) {
        toPrevPage.classList.add("disabled")
    }
    document.body.append(toPrevPage)

    const toNextPage = document.createElement("a")
    toNextPage.textContent = `página siguiente >`
    toNextPage.href = `/products?page=${data.products.nextPage}`
    if (!data.products.hasNextPage) {
        toNextPage.classList.add("disabled")
    }
    document.body.append(toNextPage)

    const toLastPage = document.createElement("a")
    toLastPage.textContent = `última pág.`
    toLastPage.href = `/products?page=${data.products.totalPages}`
    document.body.append(toLastPage)

}

getProducts()