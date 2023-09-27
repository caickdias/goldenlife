const Pic = ({ src }) => {
    return(
        <img 
            src={src}
            alt="pic bg"
            className="rounded-md mb-4 lg:aspect-square lg:flex lg:flex-1"
        />
    )
}

export default Pic;