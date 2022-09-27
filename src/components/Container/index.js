import styles from './styles.module.css'

export default function Container() {
	return (
		<main>
			<div className={styles.container}>
				<div>
					<img
						className={styles.image}
						src="/image-product-desktop.jpg"
						alt="Perfume de vidro quadrado, na cor dourada, deitado sobre fundo branco."
					/>
				</div>

				<div className={styles.message}>
					<div>
						<span className={styles.category}>PERFUME</span>

						<h1 className={styles.title}>Gabrielle Essence Eau De Parfum</h1>

						<p className={styles.description}>
							A floral, solar and voluptuous interpretation composed by Olivier
							Polge, Perfumer-Creator for the House of CHANEL.
						</p>

						<div className={styles.containerPrice}>
							<h1 className={[styles.title, styles.offerPrice]}>$149.99</h1>
							<s>$169.99</s>
						</div>
					</div>

					<button className={styles.button}>
						<img className={styles.icon} src="/icon-cart.svg"></img>
						<strong>Add to Cart</strong>
					</button>
				</div>
			</div>
		</main>
	)
}
