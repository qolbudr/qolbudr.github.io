const Badge = (props) => {
    return (
        <div class="badge">
            <span class="px-10 py-2 text-cyan-500 bg-cyan-500/20 text-sm rounded-full">{props.name}</span>
        </div>
    )
}

export default Badge;