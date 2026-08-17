async function obtenerDatos() {
    const contenedor = document.getElementById("contenedor");

    try {
        const respuesta = await fetch("../datos/productos.json");

        if (!respuesta.ok) {
            throw new Error("No se pudo obtener el archivo productos.json");
        }

        const productos = await respuesta.json();

        contenedor.innerHTML = "";

        productos.forEach(producto => {
            const articulo = document.createElement("article");
            articulo.classList.add("producto");

            articulo.innerHTML = `
                <h3 class="nombre">${producto.nombre}</h3>
                <data class="precio" value="${producto.precio}">
                    Precio: $${producto.precio}
                </data>
                <data class="stock" value="${producto.stock}">
                    Stock: ${producto.stock}
                </data>
            `;

            contenedor.appendChild(articulo);
        });

        const mensaje = document.createElement("p");
        mensaje.textContent = "Los productos se cargaron correctamente.";
        mensaje.style.color = "green";

        contenedor.insertAdjacentElement("beforebegin", mensaje);

    } catch (error) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "Error: no se pudieron cargar los productos.";
        mensaje.style.color = "red";

        contenedor.insertAdjacentElement("beforebegin", mensaje);

        console.error(error);
    }
}

obtenerDatos();