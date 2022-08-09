const Navbar = () => {
    return (
        <div className="navbar px-10 py-5 md:px-20 flex flex-row justify-between items-center">
            <div className="navbar-title basis-1/3">
                <h3 className="text-xl text-cyan-500 font-medium m-0 p-0">qolbudr</h3>
            </div>
            <div className="navbar-link hidden md:flex flex-row justify-between items-center basis-1/3 uppercase text-sm">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Portfolio</a>
                <a href="#">Blog</a>
            </div>
            <div className="hidden md:block navbar-contact basis-1/3 text-right">
                <button className="text-xs uppercase bg-cyan-500 px-10 py-3 text-white rounded-md hover:bg-cyan-700">Contact</button>
            </div>
        </div>
    )
}

export default Navbar;