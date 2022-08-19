import { getFirestore, collection, getDocs } from "firebase/firestore";
import CardPortfolio from './CardPortfolio'
import CardPortfolioSkeleton from './CardPortfolioSkeleton'
import { app } from "../../utils/firebase.js"
import { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Portfolio = () => {
	const [portfolio, setPortfolio] = useState(null)

	const getPortfolio = async () => {
		const db = getFirestore(app);
		const docsSnapshot = await getDocs(collection(db, "portfolio"));
		let array = []
		docsSnapshot.forEach((doc) => {
			array.push(doc.data())
		})

		setPortfolio(array)
	}

	useEffect(() => {
	  getPortfolio();
	});

	return (
		<div className="mb-10 px-5 md:px-16 lg:px-28">
			<div className="py-10 px-10 md:py-24 md:px-36 md:pb-36 border border-slate-300">
				<div className="flex justify-between items-center mb-5">
					<h6 className="text-md font-medium">Some of My Recent Projects <i className="lnr lnr-arrow-down ml-1 text-green-500 font-bold"></i></h6>
				</div>
				{portfolio ? (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
						{portfolio .map((item) => 
							<CardPortfolio image={item.image} title={item.title} description={item.description} link={item.link}/>
						)}
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
						<CardPortfolioSkeleton/>
						<CardPortfolioSkeleton/>
						<CardPortfolioSkeleton/>
						<CardPortfolioSkeleton/>
					</div>
				)}
			</div>
		</div>
	)
}

export default Portfolio;