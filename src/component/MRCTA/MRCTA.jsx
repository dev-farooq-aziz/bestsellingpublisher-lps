const MRCTA = ({
    text,
    link = "javascript:;",
    classes = "",
    bg = "bg-primary-100",
    color = "text-white",
    border = "border-transparent",
    handle = "",
    animation = ""
}) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<a href="${link}" class="w-full mr-md:w-max h-[50px] ${bg} ${color} rounded-md flex items-center !px-10 font-sans font-semibold justify-center border-2 transition-all ${border} ${animation} ${classes}" ${handle}>${text}</a>` }} />
    )
}

export default MRCTA