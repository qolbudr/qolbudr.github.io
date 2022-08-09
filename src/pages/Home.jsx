import Navbar from '../components/Navbar'
import Me from '../assets/me.jpg'
import Misc from '../assets/misc.png'
import Badge from '../components/Badge'
import Resume from '../components/Resume'
import { FiCloud, FiCode, FiSmartphone }  from "solid-icons/fi";
import Service from '../components/Service'

const Home = () => {
    return(
        <div className="wrap">
            <Navbar/>
            <div className="section-about px-10 py-5 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="about basis-full md:basis-1/2 mb-5 lg:mb-0">
                        <h3 className="text-3xl md:text-4xl text-black font-medium m-0 p-0">
                            Hi! <span className="text-cyan-500">I'm Qolbu Dzikru.</span>
                        </h3>
                        <h3 className="text-3xl md:text-4xl text-black font-medium m-0 p-0">
                            Great to see you.
                        </h3>
                        <p className="my-5">My Name is Qolbu Dzikru Rosyadi now i'm currently studied at State University of Surabaya. I'm love learning something new especially about programming and logic.</p>
                        <button className="text-xs uppercase bg-cyan-500 px-10 py-3 text-white rounded-sm hover:bg-cyan-700">Download CV</button>
                    </div>
                    <div className="my-photo basis-full md:basis-1/2 w-full flex justify-end">
                        <div className="me-wrap relative">
                            <div className="base absolute md:w-auto h-5/6 -right-10 left-10 md:left-20 md:-right-20 -bottom-14 bg-cyan-500 text-white p-5">
                                <img className="absolute bottom-5 right-10 w-36" src={Misc} alt="misc"/>
                            </div>
                            <img src={Me} className="relative top-0 w-full md:w-64 lg:w-96" alt="me"/>
                            <div className="quotes absolute w-2/3 w-auto right-20 md:w-60 -left-10 md:-left-20 -bottom-7 bg-blue-900 text-white p-5">
                                <div className="apos text-7xl">"</div>
                                <p className="quote-text text-sm -mt-8">Jadilah tempe karena hidup tidak ada yang tahu...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-resume px-10 py-32 md:px-20">
                <div className="w-full text-center">
                    <Badge name="Resume"/>
                    <h3 className="mt-5 font-medium text-2xl">Check my Resume</h3>
                </div>
                <div className="w-full flex flex-col md:flex-row my-5">
                    <div className="basis-full md:basis-1/2">
                        <h3 className="text-2xl font-medium">Summary</h3>
                        <div className="relative my-3">
                            <Resume>
                                <div className="relative flex flex-row items-center text-cyan-500 mb-2">
                                    <div className="w-5 h-5 rounded-full bg-cyan-500"></div>
                                    <h4 className="text-lg font-medium uppercase ml-2">Achievement</h4>
                                </div>
                                <ul className="list-disc list-outside ml-10 leading-7">
                                    <li>Honorable Mention Hack The Mountain 2.0 Hackathon By MLH Kathua, India</li>
                                    <li>Runner Up Indonesian Federation Publisher of Research Inovation 2021</li>
                                    <li>Finalist FYNCI Software Development 2021</li>
                                    <li>Finalist Code AMCC Amikom 2021</li>
                                    <li>3rd Winner Scientific UINSA 2020</li>
                                    <li>Semifinalist Bionix ISE ITS 2019</li>
                                </ul>
                            </Resume>
                        </div>
                        <h3 className="text-2xl font-medium">Education</h3>
                        <div className="relative mb-0 md:mb-3 mt-3">
                            <div className="wrap-resume relative mb-0 md:mb-5">
                                <div className="absolute top-2 left-2 bottom-0 w-0.5 h-full bg-gray-400"></div>
                                <div className="relative flex flex-row items-center text-cyan-500 mb-2">
                                    <div className="w-5 h-5 rounded-full bg-cyan-500"></div>
                                    <h4 className="text-lg font-medium uppercase ml-2">Universitas Negeri Surabaya</h4>
                                </div>
                                <div className="ml-7 mb-0 md:mb-5 pb-5 md:pb-0">
                                    <Badge name="2019 - Now"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-full md:basis-1/2">
                        <div className="relative mt-0 md:mt-3 mb-3">
                            <Resume>
                                <div className="relative flex flex-row items-center text-cyan-500 mb-2">
                                    <div className="w-5 h-5 rounded-full bg-cyan-500"></div>
                                    <h4 className="text-lg font-medium uppercase ml-2">MAN 2 Lamongan</h4>
                                </div>
                                <div className="ml-7 mb-5">
                                    <Badge name="2016 - 2019"/>
                                </div>
                                <div className="relative flex flex-row items-center text-cyan-500 mb-2">
                                    <div className="w-5 h-5 rounded-full bg-cyan-500"></div>
                                    <h4 className="text-lg font-medium uppercase ml-2">MTsN Model Babat</h4>
                                </div>
                                <div className="ml-7 mb-5">
                                    <Badge name="2013 - 2016"/>
                                </div>
                                <div className="relative flex flex-row items-center text-cyan-500 mb-2">
                                    <div className="w-5 h-5 rounded-full bg-cyan-500"></div>
                                    <h4 className="text-lg font-medium uppercase ml-2">MIM 04 Moropelang</h4>
                                </div>
                                <div className="ml-7 mb-5">
                                    <Badge name="2007 - 2013"/>
                                </div>
                            </Resume>
                        </div>
                        <h3 className="text-2xl font-medium">Work</h3>
                        <div className="relative my-3">
                            <Resume>
                                <div className="relative flex flex-row items-center text-cyan-500 mb-2">
                                    <div className="w-5 h-5 rounded-full bg-cyan-500"></div>
                                    <h4 className="text-lg font-medium uppercase ml-2">Experience</h4>
                                </div>
                                <ul className="list-disc list-outside ml-10 leading-7">
                                    <li>Software Developer - Evorty</li>
                                    <li>Frontend Designer - Kompas Gramedia</li>
                                    <li>Software Developer - Revo Apps Surabaya</li>
                                </ul>
                            </Resume>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;