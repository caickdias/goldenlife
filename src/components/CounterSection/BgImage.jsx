const BgImage = ({ src }) => {
    return (
        <img 
            src={src}
            alt="counter image bg"
            className="absolute h-full object-cover opacity-10"
        />
    )
}

export default BgImage;