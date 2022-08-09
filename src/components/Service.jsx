const Service = (props) => {
    return (
        <div>
            <div className="w-12 h-12 bg-cyan-500/10 flex rounded-full justify-center items-center">
                {props.children}
            </div>
            <h5 className="font-medium text-lg my-3">{props.title}</h5>
            <p class="text-md">{props.description}</p>
        </div>
    )
}

export default Service;