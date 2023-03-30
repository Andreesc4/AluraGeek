const nuevoProducto = (name, imageUrl, price, id, section, description) => {
    const card = document.createElement("div")
    const contenido = ` <div class="productos__box">
    <ul class="productos__list">
        <li class="productos__list__items">
            <img class="producto__item__img" src="${imageUrl}" alt="Star Wars">
            <p class="producto__item__title">${name}</p>
            <p class="producto__item__precio">${price}</p>
            <p class="producto__item__ver"></p>
        </li>
    </ul>
</div>`
}