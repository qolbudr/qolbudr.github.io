const CardPortfolio = (props) => {
	return (
		<div className="portfolio-wrap mb-5">
			<img src={props.image} className="w-full"/>
			<h2 className="text-md font-medium mt-5 mb-3">{props.title}</h2>
			<h4 className="text-sm mb-5">{props.description}</h4>
			<div className="relative inline-flex">
				<a href={props.link} target="_blank">
					<h2 className="text-md font-medium">View Now</h2>
				</a>
				<div className="absolute left-0 bottom-0 right-0 h-0.5 bg-black"></div>
			</div>
		</div>
	)
}

export default CardPortfolio;