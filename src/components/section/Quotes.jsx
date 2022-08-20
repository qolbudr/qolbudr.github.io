import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../utils/firebase.js"
import { useState, useEffect } from 'react';

const Quotes = () => {
	const [quotes, setQuotes] = useState(null)

	const getQuotes = async () => {
		const db = getFirestore(app);
		const docSnapshot = await getDoc(doc(db, "quotes", "FhESg7KUcqmdrnAADNp6"));
		const data = docSnapshot.data()
		setQuotes(data.text)
	}

	useEffect(() => {
	  getQuotes();
	}, []);

	return (
		<div className="mb-10 py-5 px-5 md:px-16 lg:px-28">
			<div className="bg-stone-900 p-10 md:py-24 md:p-16 text-white">
				<div className="w-full flex items-center justify-center relative">
					<div className="w-full md:w-1/2">
						<h1 className="leading-10 font-extralight text-xl">{quotes ? '❝' + quotes + '❞' : (
							<div className="animate-pulse w-full">
								<div className="h-4 rounded-full bg-gray-700 w-full mb-7"></div>
								<div className="h-4 rounded-full bg-gray-700 w-full"></div>
							</div>
						)}</h1>
						<div className="flex items-center mt-10">
							<h2 className="text-green-500"> - Someone Somewhere</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Quotes;