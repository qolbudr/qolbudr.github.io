const Resume = (props) => {
    return (
        <div class="wrap-resume relative mb-5">
            <div class="absolute top-2 left-2 bottom-0 w-0.5 h-full bg-gray-400"></div>
            {props.children}
        </div>
    )
}

export default Resume;