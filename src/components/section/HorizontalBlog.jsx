import { createSlug } from '../../utils/slug.js'

const HorizontalBlog = (props) => {
	if(props.isLoading)
		return (
			<div className="flex items-start gap-5 mb-3 animate-pulse">
				<div className="flex justify-center items-center w-32 h-32 bg-gray-300 dark:bg-gray-700">
	        <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
	    	</div>
				<div className="blog-details">
					<div className="flex mb-3 items-center gap-2">
						<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
						<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
					</div>
					<div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
					<div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
				</div>
			</div>
		)

	return (
		<a href={'/blog/' + createSlug(props.item)}>
			<div className="flex items-start gap-5 mb-3">
				<img src={props.image} className="h-32 w-32 md:h-24 md:w-auto" style={{objectFit: 'cover'}} alt="blog"/>
				<div className="blog-details">
					<div className="flex mb-3 items-center gap-2">
						<div className="bg-green-500 text-white text-sm p-1 px-3 rounded-sm">{props.category}</div>
						<h5 className="text-sm">• {props.readTime}</h5>
					</div>
					<h3 className="text-md font-medium">{props.title}</h3>
				</div>
			</div>
		</a>
	)
}

export default HorizontalBlog;