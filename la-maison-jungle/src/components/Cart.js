import '../styles/Cart.css'

function Cart() {
    const Monstera = 8;
    const Lierre = 10;
    const Bouquet = 15;
    return (
      <section className="lmj-cart">
        <h2>Mon panier</h2>
        <ul>
          <li>
            Monstera : {Monstera}€
          </li>
          <li>
            Lierre : {Lierre}€
          </li>
          <li>
            Bouquet de fleur : {Bouquet}€
          </li>
        </ul>
        Total : {Monstera + Lierre + Bouquet}€
      </section>
    )
}

export default Cart