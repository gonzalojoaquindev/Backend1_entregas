const ulProducts = document.querySelector("ul")

const getCartById = async () => {
    /*  const url = new URL(location.search);
     const pathname = url.pathname; // /producto/123
 
     // Dividir la ruta por '/' y tomar el último elemento (el ID)
     const id = pathname.split('/').pop();
 
     console.log(id); // Imprimirá: 123 */

    let params = new URLSearchParams(location.search)
    console.log(params)
    let cid = params.get("id")
    if (!cid) {
        console.log("No es id valido")
    } else {
        let res = await fetch(`/api/carts/${cid}`)
        console.log(res)
        let data = await res.json()
        console.log(data);
    }
    /* 
        let limit = params.get("limit")
        if (!limit || isNaN(Number(limit))) {
            console.log("limit", limit)
            limit = 5
        }
    
        let sort = params.get("sort")
        if (!sort || sort !== "asc" && sort !== "desc") {
            console.log("sort", sort)
            sort = { code: 1 }
        } */

    /* let res = await fetch(`/api/products?page=${page}&limit=${limit}&sort=${sort}`) */


    /* data.products.docs.forEach(p => {
        let liProduct = document.createElement("li")
        liProduct.textContent = `${p.code} - ${p.title} - ${p.description} - Categoria: ${p.category}  $ ${p.price}`
        ulProducts.append(liProduct)
    }) */


    data.products.docs.forEach(producto => {
        let container = document.createElement("div")
        let card = document.createElement("div")
        let content = document.createElement("div")
        let title = document.createElement("span")
        let description = document.createElement("p")
        let category = document.createElement("span")
        let price = document.createElement("p")
        let action = document.createElement("div")
        let button = document.createElement("a")
        let icon = document.createElement("i")


        container.classList.add('col', 's4', 'm4')
        card.classList.add('card', 'blue-grey', 'darken-1')
        content.classList.add('card-content', 'white-text')
        title.classList.add('card-title', 'white-text')
        category.classList.add("new", "badge", "orange")
        action.classList.add('card-action')
        icon.classList.add('material-icons')


        title.textContent = producto.title
        description.textContent = producto.description
        category.textContent = producto.category
        price.textContent = `$ ${producto.price}`
        button.textContent = "Agregar a carrito "
        icon.textContent = "add_shopping_cart"

        /*     < i class="material-icons" > add_shopping_cart</i > */


        container.append(card)
        card.append(content, action)
        content.append(title, description, price, category)
        action.append(button)
        button.append(icon)

        divCarts.append(container)
        divCarts.scrollTop = divCarts.scrollHeight
        button.onclick = function () {
            fetch('/crear-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.ok) {
                        // Manejar la respuesta exitosa
                        console.log('Post creado exitosamente');
                    } else {
                        // Manejar errores
                        console.error('Error al crear el post');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
        /* socket.emit("deleteProduct", producto.id) */
        /*  card.remove() */
    })


    /* productos.forEach(producto => {
    
    }
    )
    */


    const toFirtsPage = document.createElement("a")
    toFirtsPage.textContent = `Primera pág.`
    toFirtsPage.href = `/products?page=1&limit=${data.products.limit}&sort=${sort}`
    document.body.append(toFirtsPage)

    const toPrevPage = document.createElement("a")
    toPrevPage.textContent = `< página anterior`
    toPrevPage.href = `/products?page=${data.products.prevPage}&limit=${data.products.limit}&sort=${sort}`
    if (!data.products.hasPrevPage) {
        toPrevPage.classList.add("disabled")
    }
    document.body.append(toPrevPage)

    const toNextPage = document.createElement("a")
    toNextPage.textContent = `página siguiente >`
    toNextPage.href = `/products?page=${data.products.nextPage}&limit=${data.products.limit}&sort=${sort}`
    if (!data.products.hasNextPage) {
        toNextPage.classList.add("disabled")
    }
    document.body.append(toNextPage)

    const toLastPage = document.createElement("a")
    toLastPage.textContent = `última pág.`
    toLastPage.href = `/products?page=${data.products.totalPages}&limit=${data.products.limit}&sort=${sort}`
    document.body.append(toLastPage)
}

getCartById()