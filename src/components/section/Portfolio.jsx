import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";
import CardPortfolio from './CardPortfolio'
import { app } from "../../utils/firebase.js"
import { useState, useEffect } from 'react';
import { shuffleArray } from '../../utils/shuffle.js'

const Portfolio = () => {
	const [portfolios, setPortfolio] = useState(null)
	const [display, setDisplay] = useState(null)

	const getPortfolio = async () => {
		const db = getFirestore(app);
		const docsSnapshot = await getDocs(query(collection(db, "portfolio"), orderBy('timestamp', 'desc')));
		let array = []
		docsSnapshot.forEach((doc) => {
			array.push(doc.data())
		})

		setPortfolio(array)
		setDisplay(array.slice(0, 4));
	}

	const shufflePortfolio = async () => {
		setDisplay(null)
		setTimeout(() => {
			const newArray = shuffleArray(portfolios)
			setDisplay(newArray.slice(0, 4))
		}, 2000)
	}

	useEffect(() => {
	  getPortfolio();
	}, []);

	return (
		<div id="portfolio" className="mb-10 px-5 md:px-16 lg:px-28">
			<div className="py-8 px-8 md:py-24 md:px-36 md:pb-36 border border-slate-300">
				<div className="flex justify-between items-center mb-5">
					<h6 className="text-md font-medium">Some of My Recent Projects <i className="lnr lnr-arrow-down ml-1 text-green-500 font-bold"></i></h6>
					{display ? (
						<button onClick={shufflePortfolio} className="border border-stone-300 px-7 py-2 rounded-full text-xs">More</button>
					) : (
						<button className="gap-1 border border-stone-300 px-7 py-2 rounded-full text-xs flex items-center">
							More
							<div className="lnr lnr-sync animate-spin"></div>
						</button>
					)}
					
				</div>
				{display ? (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
						{display.map((item, index) => 
							<CardPortfolio key={index} image={item.image} title={item.title} description={item.description} link={item.link}/>
						)}
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
						<CardPortfolio isLoading={true}/>
						<CardPortfolio isLoading={true}/>
						<CardPortfolio isLoading={true}/>
						<CardPortfolio isLoading={true}/>
					</div>
				)}
			</div>
		</div>
	)
}

export default Portfolio;