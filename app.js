class Producto {
    constructor(nombre, precio, descuento, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento; 
        this.imagen = imagen;
    }

    calcularPrecioFinal() {
        const montoDescuento = (this.precio * this.descuento) / 100;
        return this.precio - montoDescuento;
    }
}

const prod1 = new Producto(
    "Audífonos Bluetooth", 
    150, 
    20, 
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
);

const prod2 = new Producto(
    "Teclado Mecánico", 
    280, 
    15, 
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80"
);

const prod3 = new Producto(
    "Mouse Gamer", 
    120, 
    10, 
    "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80"
);
const catalogo = [prod1, prod2, prod3];

const contenedor = document.getElementById("contenedor-productos");

catalogo.forEach((producto, index) => {
    // Creación de la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-producto");

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p class="precio" id="precio-${index}">Precio: S/ ${producto.precio.toFixed(2)}</p>
        <button class="btn-descuento" id="btn-${index}">Aplicar Descuento (${producto.descuento}%)</button>
    `;

    contenedor.appendChild(tarjeta);

    // Paso 5: Implementación de Eventos
    const boton = tarjeta.querySelector(`#btn-${index}`);
    const elementoPrecio = tarjeta.querySelector(`#precio-${index}`);

    boton.addEventListener("click", () => {
        const precioFinal = producto.calcularPrecioFinal();
        elementoPrecio.textContent = `Precio con descuento: S/ ${precioFinal.toFixed(2)}`;
        elementoPrecio.style.color = "#28a745"; 
        boton.disabled = true; 
        boton.textContent = "Descuento Aplicado";
    });
});