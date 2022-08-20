import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";
import HorizontalBlog from "./HorizontalBlog"
import { app } from "../../utils/firebase.js"
import { useState, useEffect } from 'react';
import { shuffleArray } from '../../utils/shuffle.js'

const Blog = () => {
	const [blogs, setBlog] = useState(null)
	const [display, setDisplay] = useState(null)

	const getBlog = async () => {
		const db = getFirestore(app);
		const docsSnapshot = await getDocs(query(collection(db, "blog"), orderBy('timestamp', 'desc')));
		let array = []
		docsSnapshot.forEach((doc) => {
			array.push(doc.data())
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
				<div className="basis-full md:basis-1/2">
					<img src="me.jpg" style={{height: '300px'}} className="w-full"/>
					<div className="blog-details mt-3">
						<div className="flex mb-3 items-center gap-2">
							<div className="bg-green-500 text-white text-sm p-1 rounded-sm">Technology</div>
							<h5 className="text-sm">• 4min</h5>
						</div>
						<h3 className="text-3xl mb-3 font-semibold">M1.00001 19C0.600015 12.6 21.5 11.3334 32 11.5C135.833?</h3>
						<h5 className="text-lg mb-3">Have a virtual server windows/linux but doesn't know how to use it? let's talk and serve your server</h5>
						<div className="flex items-center gap-2">
							<div className="w-10 h-10 border border-green-500 rounded-full flex items-center justify-center">
								<i className="ti ti-user"></i>
							</div>
							<h5 className="text-lg">qolbudr</h5>
						</div>
					</div>
				</div>
				<div className="basis-full md:basis-1/2">
					<HorizontalBlog/>
					<HorizontalBlog/>
					<HorizontalBlog/>
					<HorizontalBlog/>
				</div>
			</div>
		</div>
	)
}

export default Blog;