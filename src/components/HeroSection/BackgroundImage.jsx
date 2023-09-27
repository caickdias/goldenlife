const BackgroundImage = ({ img }) => {
    return(
        <img  
            src={img}
            alt="background image"
            className='lg:absolute z-0 lg:opacity-10'
        />
    )
}

export default BackgroundImage;