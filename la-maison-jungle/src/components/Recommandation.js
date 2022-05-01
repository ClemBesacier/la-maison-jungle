function Recommandation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5

    if(!isSpring) {
        return (
            <div>Ce n'est pas le prinptemps</div>
        )
    }
    return (
        <div>C'est le prinptemps, rempotez 🌱</div>
    )
}

export default Recommandation