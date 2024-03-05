import ListaProduto from '../../components/produto/listaProduto/ListaProduto';
import encomendaFoto from '../../assets/encomenda.jpg';
import banner from '../../assets/banner5.png';

const Home = () => {
	return (
		<>
			<div className="pt-10 flex content-center bg-[#F2F2F2] flex-col items-center justify-center">
				{/* <h1 className="text-8xl text-black">Home</h1>
        <h3 className="text-4xl text-black">Bem-vindo ao Projeto ReVende!</h3> */}

				<>
					<meta charSet="UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<title>Home</title>
					<link
						rel="shortcut icon"
						href="assets/images/favicon/favicon.ico"
						type="image/x-icon"
					/>
					<link rel="stylesheet" href="assets/css/main.css" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin=""
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
					/>

					{/* banner */}

					<div className="max-h-[400px] w-full bg-gradient-to-r from-[#20432f] to-[#5A6973]">
						{' '}
						<img
							src={banner}
							alt=""
							className="w-full h-full bg-center object-contain"
						/>
						{/* <a
							href="#"
							className="absolute top-[43%] left-[35%] bg-primary border border-primary text-white px-8 py-2 font-medium hover:bg-[#20432f]
                    rounded-md hover:bg-transparent hover:text-primary w-fit"
						>
							Ver categorias
						</a> */}
						{/* <div className="absolute top-[17%] pl-28 w-full  grid gap-8">
							<h1 className="text-6xl text-slate-50 font-medium drop-shadow-lg">
								Mês do Consumidor
							</h1>
							<p className="text-3xl">
								15% OFF <br />
								em <b>todos</b> os pedidos!*
							</p>
							<a
								href="#"
								className="bg-primary border border-primary text-white px-8 py-2 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary w-fit"
							>
								Ver categorias
							</a>
						</div> */}
					</div>
					{/* ./banner */}
					{/* features */}
					<div className="container py-16">
						<div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
							<div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
								<img
									src="assets/images/icons/delivery-van.svg"
									alt="Delivery"
									className="w-12 h-12 object-contain"
								/>
								<div>
									<h4 className="font-medium capitalize text-lg">
										Free Shipping
									</h4>
									<p className="text-gray-500 text-sm">Order over $200</p>
								</div>
							</div>
							<div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
								<img
									src="assets/images/icons/money-back.svg"
									alt="Delivery"
									className="w-12 h-12 object-contain"
								/>
								<div>
									<h4 className="font-medium capitalize text-lg">
										Money Rturns
									</h4>
									<p className="text-gray-500 text-sm">30 days money returs</p>
								</div>
							</div>
							<div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
								<img
									src="assets/images/icons/service-hours.svg"
									alt="Delivery"
									className="w-12 h-12 object-contain"
								/>
								<div>
									<h4 className="font-medium capitalize text-lg">
										24/7 Support
									</h4>
									<p className="text-gray-500 text-sm">Customer support</p>
								</div>
							</div>
						</div>
					</div>
					{/* ./features */}
					{/* categories */}
					<div className="container py-16">
						<h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
							shop by category
						</h2>
						<div className="grid grid-cols-3 gap-3">
							<div className="relative rounded-sm overflow-hidden group">
								<img
									src="assets/images/category/category-1.jpg"
									alt="category 1"
									className="w-full"
								/>
								<a
									href="#"
									className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
								>
									Bedroom
								</a>
							</div>
							<div className="relative rounded-sm overflow-hidden group">
								<img
									src="assets/images/category/category-2.jpg"
									alt="category 1"
									className="w-full"
								/>
								<a
									href="#"
									className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
								>
									Mattrass
								</a>
							</div>
							<div className="relative rounded-sm overflow-hidden group">
								<img
									src="assets/images/category/category-3.jpg"
									alt="category 1"
									className="w-full"
								/>
								<a
									href="#"
									className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
								>
									Outdoor
								</a>
							</div>
							<div className="relative rounded-sm overflow-hidden group">
								<img
									src="assets/images/category/category-4.jpg"
									alt="category 1"
									className="w-full"
								/>
								<a
									href="#"
									className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
								>
									Sofa
								</a>
							</div>
							<div className="relative rounded-sm overflow-hidden group">
								<img
									src="assets/images/category/category-5.jpg"
									alt="category 1"
									className="w-full"
								/>
								<a
									href="#"
									className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
								>
									Living Room
								</a>
							</div>
							<div className="relative rounded-sm overflow-hidden group">
								<img
									src="assets/images/category/category-6.jpg"
									alt="category 1"
									className="w-full"
								/>
								<a
									href="#"
									className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
								>
									Kitchen
								</a>
							</div>
						</div>
					</div>
					{/* ./categories */}
					{/* new arrival */}
					<div className="container pb-16">
						<h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
							top new arrival
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
							<div className="bg-white shadow rounded overflow-hidden group">
								<div className="relative">
									<img
										src="assets/images/products/product1.jpg"
										alt="product 1"
										className="w-full"
									/>
									<div
										className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
									>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="view product"
										>
											<i className="fa-solid fa-magnifying-glass" />
										</a>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="add to wishlist"
										>
											<i className="fa-solid fa-heart" />
										</a>
									</div>
								</div>
								<div className="pt-4 pb-3 px-4">
									<a href="#">
										<h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
											Guyer Chair
										</h4>
									</a>
									<div className="flex items-baseline mb-1 space-x-2">
										<p className="text-xl text-primary font-semibold">$45.00</p>
										<p className="text-sm text-gray-400 line-through">$55.90</p>
									</div>
									<div className="flex items-center">
										<div className="flex gap-1 text-sm text-yellow-400">
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
										</div>
										<div className="text-xs text-gray-500 ml-3">(150)</div>
									</div>
								</div>
								<a
									href="#"
									className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
								>
									Add to cart
								</a>
							</div>
							<div className="bg-white shadow rounded overflow-hidden group">
								<div className="relative">
									<img
										src="assets/images/products/product4.jpg"
										alt="product 1"
										className="w-full"
									/>
									<div
										className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
									>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="view product"
										>
											<i className="fa-solid fa-magnifying-glass" />
										</a>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="add to wishlist"
										>
											<i className="fa-solid fa-heart" />
										</a>
									</div>
								</div>
								<div className="pt-4 pb-3 px-4">
									<a href="#">
										<h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
											Bed King Size
										</h4>
									</a>
									<div className="flex items-baseline mb-1 space-x-2">
										<p className="text-xl text-primary font-semibold">$45.00</p>
										<p className="text-sm text-gray-400 line-through">$55.90</p>
									</div>
									<div className="flex items-center">
										<div className="flex gap-1 text-sm text-yellow-400">
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
										</div>
										<div className="text-xs text-gray-500 ml-3">(150)</div>
									</div>
								</div>
								<a
									href="#"
									className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
								>
									Add to cart
								</a>
							</div>
							<div className="bg-white shadow rounded overflow-hidden group">
								<div className="relative">
									<img
										src="assets/images/products/product2.jpg"
										alt="product 1"
										className="w-full"
									/>
									<div
										className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
									>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="view product"
										>
											<i className="fa-solid fa-magnifying-glass" />
										</a>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="add to wishlist"
										>
											<i className="fa-solid fa-heart" />
										</a>
									</div>
								</div>
								<div className="pt-4 pb-3 px-4">
									<a href="#">
										<h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
											Couple Sofa
										</h4>
									</a>
									<div className="flex items-baseline mb-1 space-x-2">
										<p className="text-xl text-primary font-semibold">$45.00</p>
										<p className="text-sm text-gray-400 line-through">$55.90</p>
									</div>
									<div className="flex items-center">
										<div className="flex gap-1 text-sm text-yellow-400">
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
										</div>
										<div className="text-xs text-gray-500 ml-3">(150)</div>
									</div>
								</div>
								<a
									href="#"
									className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
								>
									Add to cart
								</a>
							</div>
							<div className="bg-white shadow rounded overflow-hidden group">
								<div className="relative">
									<img
										src="assets/images/products/product3.jpg"
										alt="product 1"
										className="w-full"
									/>
									<div
										className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
									>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="view product"
										>
											<i className="fa-solid fa-magnifying-glass" />
										</a>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="add to wishlist"
										>
											<i className="fa-solid fa-heart" />
										</a>
									</div>
								</div>
								<div className="pt-4 pb-3 px-4">
									<a href="#">
										<h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
											Mattrass X
										</h4>
									</a>
									<div className="flex items-baseline mb-1 space-x-2">
										<p className="text-xl text-primary font-semibold">$45.00</p>
										<p className="text-sm text-gray-400 line-through">$55.90</p>
									</div>
									<div className="flex items-center">
										<div className="flex gap-1 text-sm text-yellow-400">
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
										</div>
										<div className="text-xs text-gray-500 ml-3">(150)</div>
									</div>
								</div>
								<a
									href="#"
									className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
								>
									Add to cart
								</a>
							</div>
						</div>
					</div>
					{/* ./new arrival */}
					{/* ads */}
					<div className="container pb-16">
						<a href="#">
							<img src="assets/images/offer.jpg" alt="ads" className="w-full" />
						</a>
					</div>
					{/* ./ads */}
					{/* product */}
					<div className="container pb-16">
						<h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
							recomended for you
						</h2>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
							<div className="bg-white shadow rounded overflow-hidden group">
								<div className="relative">
									<img
										src="assets/images/products/product1.jpg"
										alt="product 1"
										className="w-full"
									/>
									<div
										className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
									>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="view product"
										>
											<i className="fa-solid fa-magnifying-glass" />
										</a>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="add to wishlist"
										>
											<i className="fa-solid fa-heart" />
										</a>
									</div>
								</div>
								<div className="pt-4 pb-3 px-4">
									<a href="#">
										<h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
											Guyer Chair
										</h4>
									</a>
									<div className="flex items-baseline mb-1 space-x-2">
										<p className="text-xl text-primary font-semibold">$45.00</p>
										<p className="text-sm text-gray-400 line-through">$55.90</p>
									</div>
									<div className="flex items-center">
										<div className="flex gap-1 text-sm text-yellow-400">
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
										</div>
										<div className="text-xs text-gray-500 ml-3">(150)</div>
									</div>
								</div>
								<a
									href="#"
									className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
								>
									Add to cart
								</a>
							</div>
							<div className="bg-white shadow rounded overflow-hidden group">
								<div className="relative">
									<img
										src="assets/images/products/product4.jpg"
										alt="product 1"
										className="w-full"
									/>
									<div
										className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="view product"
										>
											<i className="fa-solid fa-magnifying-glass" />
										</a>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="add to wishlist"
										>
											<i className="fa-solid fa-heart" />
										</a>
									</div>
								</div>
								<div className="pt-4 pb-3 px-4">
									<a href="#">
										<h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
											Bed King Size
										</h4>
									</a>
									<div className="flex items-baseline mb-1 space-x-2">
										<p className="text-xl text-primary font-semibold">$45.00</p>
										<p className="text-sm text-gray-400 line-through">$55.90</p>
									</div>
									<div className="flex items-center">
										<div className="flex gap-1 text-sm text-yellow-400">
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
										</div>
										<div className="text-xs text-gray-500 ml-3">(150)</div>
									</div>
								</div>
								<a
									href="#"
									className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
									Add to cart
								</a>
							</div>
							<div className="bg-white shadow rounded overflow-hidden group">
								<div className="relative">
									<img
										src="assets/images/products/product2.jpg"
										alt="product 1"
										className="w-full"
									/>
									<div
										className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="view product"
										>
											<i className="fa-solid fa-magnifying-glass" />
										</a>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="add to wishlist">
											<i className="fa-solid fa-heart" />
										</a>
									</div>
								</div>
								<div className="pt-4 pb-3 px-4">
									<a href="#">
										<h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
											Couple Sofa
										</h4>
									</a>
									<div className="flex items-baseline mb-1 space-x-2">
										<p className="text-xl text-primary font-semibold">$45.00</p>
										<p className="text-sm text-gray-400 line-through">$55.90</p>
									</div>
									<div className="flex items-center">
										<div className="flex gap-1 text-sm text-yellow-400">
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
										</div>
										<div className="text-xs text-gray-500 ml-3">(150)</div>
									</div>
								</div>
								<a
									href="#"
									className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
									Add to cart
								</a>
							</div>
							<div className="bg-white shadow rounded overflow-hidden group">
								<div className="relative">
									<img
										src="assets/images/products/product3.jpg"
										alt="product 1"
										className="w-full"
									/>
									<div
										className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="view product">
											<i className="fa-solid fa-magnifying-glass" />
										</a>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="add to wishlist">
											<i className="fa-solid fa-heart" />
										</a>
									</div>
								</div>
								<div className="pt-4 pb-3 px-4">
									<a href="#">
										<h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
											Mattrass X
										</h4>
									</a>
									<div className="flex items-baseline mb-1 space-x-2">
										<p className="text-xl text-primary font-semibold">$45.00</p>
										<p className="text-sm text-gray-400 line-through">$55.90</p>
									</div>
									<div className="flex items-center">
										<div className="flex gap-1 text-sm text-yellow-400">
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
										</div>
										<div className="text-xs text-gray-500 ml-3">(150)</div>
									</div>
								</div>
								<a
									href="#"
									className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
									Add to cart
								</a>
							</div>
							<div className="bg-white shadow rounded overflow-hidden group">
								<div className="relative">
									<img
										src="assets/images/products/product1.jpg"
										alt="product 1"
										className="w-full"/>
									<div
										className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="view product">
											<i className="fa-solid fa-magnifying-glass" />
										</a>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="add to wishlist">
											<i className="fa-solid fa-heart" />
										</a>
									</div>
								</div>
								<div className="pt-4 pb-3 px-4">
									<a href="#">
										<h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
											Guyer Chair
										</h4>
									</a>
									<div className="flex items-baseline mb-1 space-x-2">
										<p className="text-xl text-primary font-semibold">$45.00</p>
										<p className="text-sm text-gray-400 line-through">$55.90</p>
									</div>
									<div className="flex items-center">
										<div className="flex gap-1 text-sm text-yellow-400">
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
										</div>
										<div className="text-xs text-gray-500 ml-3">(150)</div>
									</div>
								</div>
								<a
									href="#"
									className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
									Add to cart
								</a>
							</div>
							<div className="bg-white shadow rounded overflow-hidden group">
								<div className="relative">
									<img
										src="assets/images/products/product4.jpg"
										alt="product 1"
										className="w-full"/>
									<div
										className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="view product">
											<i className="fa-solid fa-magnifying-glass" />
										</a>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="add to wishlist">
											<i className="fa-solid fa-heart" />
										</a>
									</div>
								</div>
								<div className="pt-4 pb-3 px-4">
									<a href="#">
										<h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
											Bed King Size
										</h4>
									</a>
									<div className="flex items-baseline mb-1 space-x-2">
										<p className="text-xl text-primary font-semibold">$45.00</p>
										<p className="text-sm text-gray-400 line-through">$55.90</p>
									</div>
									<div className="flex items-center">
										<div className="flex gap-1 text-sm text-yellow-400">
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
										</div>
										<div className="text-xs text-gray-500 ml-3">(150)</div>
									</div>
								</div>
								<a
									href="#"
									className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
									Add to cart
								</a>
							</div>
							<div className="bg-white shadow rounded overflow-hidden group">
								<div className="relative">
									<img
										src="assets/images/products/product2.jpg"
										alt="product 1"
										className="w-full"/>
									<div
										className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="view product">
											<i className="fa-solid fa-magnifying-glass" />
										</a>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="add to wishlist">
											<i className="fa-solid fa-heart" />
										</a>
									</div>
								</div>
								<div className="pt-4 pb-3 px-4">
									<a href="#">
										<h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
											Couple Sofa
										</h4>
									</a>
									<div className="flex items-baseline mb-1 space-x-2">
										<p className="text-xl text-primary font-semibold">$45.00</p>
										<p className="text-sm text-gray-400 line-through">$55.90</p>
									</div>
									<div className="flex items-center">
										<div className="flex gap-1 text-sm text-yellow-400">
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
										</div>
										<div className="text-xs text-gray-500 ml-3">(150)</div>
									</div>
								</div>
								<a
									href="#"
									className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
									Add to cart
								</a>
							</div>
							<div className="bg-white shadow rounded overflow-hidden group">
								<div className="relative">
									<img
										src="assets/images/products/product3.jpg"
										alt="product 1"
										className="w-full"/>
									<div
										className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="view product">
											<i className="fa-solid fa-magnifying-glass" />
										</a>
										<a
											href="#"
											className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
											title="add to wishlist">
											<i className="fa-solid fa-heart" />
										</a>
									</div>
								</div>
								<div className="pt-4 pb-3 px-4">
									<a href="#">
										<h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
											Mattrass X
										</h4>
									</a>
									<div className="flex items-baseline mb-1 space-x-2">
										<p className="text-xl text-primary font-semibold">$45.00</p>
										<p className="text-sm text-gray-400 line-through">$55.90</p>
									</div>
									<div className="flex items-center">
										<div className="flex gap-1 text-sm text-yellow-400">
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
											<span>
												<i className="fa-solid fa-star" />
											</span>
										</div>
										<div className="text-xs text-gray-500 ml-3">(150)</div>
									</div>
								</div>
								<a
									href="#"
									className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
									Add to cart
								</a>
							</div>
						</div>
					</div>
					{/* ./product */}
				</>

				<ListaProduto />
			</div>
		</>
	);
};

export default Home;
