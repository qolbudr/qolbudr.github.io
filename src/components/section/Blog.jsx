import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";
import HorizontalBlog from "./HorizontalBlog"
import { app } from "../../utils/firebase.js"
import { useState, useEffect } from 'react';
import { shuffleArray } from '../../utils/shuffle.js'
import { createSlug } from '../../utils/slug.js'

const Blog = () => {
	const [blogs, setBlog] = useState(null)
	const [display, setDisplay] = useState(null)

	const getBlog = async () => {
		const db = getFirestore(app);
		const docsSnapshot = await getDocs(query(collection(db, "blog"), orderBy('timestamp', 'desc')));
		let array = []
		docsSnapshot.forEach((doc) => {
			array.push({...doc.data(), id: doc.id})
		})

		setBlog(array)
		setDisplay(array.slice(1, 4));
	}

	useEffect(() => {
	  getBlog();
	}, []);

	return (
		<div className="mb-10 py-5 px-5 md:px-16 lg:px-28">
			<div className="inline-flex relative">
				<h1 className="text-4xl leading-tight">Wanna <br/> read <strong>Something ?</strong></h1>
				<div className="absolute w-100 -bottom-5 left-0 right-0">
					<svg viewBox="0 0 859 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.00001 19C0.600015 12.6 21.5 11.3334 32 11.5C135.833 8.83336 361.9 3.00001 435.5 1.00001C527.5 -1.49999 826.5 10.5 847.5 11C864.3 11.4 858.5 15.8333 853.5 18H833C745 15.8333 551.8 11.5 483 11.5C397 11.5 61.5 26.5 32 29C2.50003 31.5 1.50001 27 1.00001 19Z" fill="#22C55E"/>
					</svg>
				</div>
			</div>
			<div className="flex flex-col md:flex-row flex-basis items-start justify-between mt-20 gap-20">
				{blogs ? (
					<div className="basis-full md:basis-1/2">
						<a href={ 'https://qolbudr.github.io/blog/' + createSlug(blogs[0]) }>
							<img src={blogs[0].image} style={{height: 'auto', maxHeight: '300px', objectFit: 'cover'}} className="w-full"/>
							<div className="blog-details mt-3">
								<div className="flex mb-3 items-center gap-2">
									<div className="bg-green-500 text-white text-sm p-1 px-3 rounded-sm">{blogs[0].category}</div>
									<h5 className="text-sm">• {blogs[0].readTime}</h5>
								</div>
								<h3 className="text-3xl mb-3 font-semibold">{blogs[0].title}</h3>
								<h5 className="text-lg mb-3">{blogs[0].description}</h5>
								<div className="flex items-center gap-2">
									<div className="w-10 h-10 border border-green-500 rounded-full flex items-center justify-center">
										<i className="ti ti-user"></i>
									</div>
									<h5 className="text-lg">qolbudr</h5>
								</div>
							</div>
						</a>
					</div>
				) : (
					<div className="basis-full md:basis-1/2 animate-pulse">
						<div className="flex justify-center items-center w-full h-48 md:h-80 bg-gray-300 dark:bg-gray-700">
			        <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
			    	</div>
						<div className="blog-details mt-3">
							<div className="flex mb-3 items-center gap-2">
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
							</div>
							<div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-3"></div>
							<div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-1"></div>
							<div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-3"></div>
							<div className="flex items-center gap-2">
								<div className="w-10 h-10 border border-green-500 rounded-full flex items-center justify-center">
									<i className="ti ti-user"></i>
								</div>
								<div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
							</div>
						</div>
					</div>
				)}
				{display ? (
					<div className="basis-full md:basis-1/2">
						{display.map((item) => 
							<HorizontalBlog
								item={item}
								title={item.title}
								image={item.image}
								readTime={item.readTime}
								category={item.category}
							/>
						)}
					</div>
				) : (
					<div className="basis-full md:basis-1/2">
						<HorizontalBlog isLoading={true}/>
						<HorizontalBlog isLoading={true}/>
						<HorizontalBlog isLoading={true}/>
						<HorizontalBlog isLoading={true}/>
					</div>
				)}
			</div>
		</div>
	)
}

export default Blog;