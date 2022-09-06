import { useState, useEffect } from 'react';
import axios from 'axios'

const ContactForm = () => {
	const [value, setValue] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const [isLoading, setLoading] = useState(false)

	const handleChange = (e) => {
		const val = e.target.getAttribute('name')
		let data = value;
		data[val] = e.target.value
		setValue(data);
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)
		const response = await axios.post("https://nottifier.vercel.app", value)
		setLoading(false)
		e.target.reset()
	}

	return (
		<div className="mb-10 py-5 px-0 md:px-16 lg:px-28">
			<div className="bg-stone-900 p-10 md:py-24 md:p-16 text-white">
				<div className="w-full gap-10 md:gap-20 px-0 md:px-10 flex flex-col md:flex-row flex-basis items-center justify-center">
					<div className="basis-full md:basis-1/2">
						<h2 className="text-2xl text-green-500 font-bold">Get in Touch</h2>
						<h5 className="text-lg text-slate-300 my-3">Why waiting so long ? Talk to me about your project and make it real now!</h5>
						<h5 className="text-lg text-green-500 fonr-medium">Let's Connect</h5>
					</div>
					<div className="basis-full md:basis-1/2 text-black">
						<form onSubmit={handleSubmit}>
							<div className="flex flex-col md:flex-row flex-basis items-center gap-2 mb-2">
								<div className="basis-full md:basis-1/2 w-full">
									<input type="text" onChange={handleChange} name="name" placeholder="Name" className="w-full py-4 px-5 bg-slate-300" required/>
								</div>
								<div className="basis-full md:basis-1/2 w-full">
									<input type="email" onChange={handleChange} name="email" placeholder="Email" className="w-full py-4 px-5 bg-slate-300" required/>
								</div>
							</div>
							<input type="text" onChange={handleChange} name="subject" placeholder="Subject" className="py-4 px-5 bg-slate-300 mb-2 w-full" required/>
							<textarea type="text" onChange={handleChange} name="message" placeholder="Message" className="py-4 px-5 bg-slate-300 w-full" rows="5" required></textarea>
							{isLoading ? (
								<button className="bg-gray-500 w-full text-white py-4 px-5 flex gap-1 items-center justify-center" disabled>
									Loading <div className="lnr lnr-sync animate-spin"></div>
								</button>
							) : (
								<button type="submit" className="bg-green-500 w-full text-white py-4 px-5">Send Message</button>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactForm;