const getProduct = async () => {
    let product = await fetch("http://localhost:3000/api/product/produk-api")
    return product.json(body);
}

export default async function Product() {
    const {product} = await getProduct();
    console.log(product)

    return (
        <div>
            <ul>
                {product.map((t) => {
                    return (
                    <li key={t.id}>
                        {t.namaproduk}
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}