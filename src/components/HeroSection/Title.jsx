const Title = ({ title }) => {
    return(
        <h1 className='text-white font-bold text-3xl leading-normal z-40 whitespace-pre-line
            lg:text-4xl lg:leading-normal
            xl:text-5xl xl:leading-loose'
        >
            {title}
        </h1>
    )
}

export default Title;