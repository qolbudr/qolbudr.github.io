import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardPortfolioSkeleton = () => {
	return (
		<div className="portfolio-wrap mb-5">
			<Skeleton className="h-64"/>
			<h2 className="text-md font-medium mt-5 mb-3"><Skeleton/></h2>
			<h4 className="text-sm mb-5"><Skeleton/></h4>
			<div className="relative inline-flex">
				<a>
					<h2 className="text-md font-medium"><Skeleton/></h2>
				</a>
			</div>
		</div>
	)
}

export default CardPortfolioSkeleton;