const FancyPic = ({ src }) => {
    return(
        <div className="relative flex w-full aspect-square mb-6">
            <InnerSquare />
            
            <PicSquare src={src} />

        </div>
    )
}

const InnerSquare = () => {
    return(
        <div className="absolute w-full pl-4 pt-8 z-0">
            <div className="w-full aspect-square bg-gradient-to-b from-main-blue via-main-blue to-main-gold rounded-md p-4">
                <div className="w-full h-full bg-white"></div>

            </div>
        </div>
    )
}

const PicSquare = ({ src }) => {
    return(
        <div className="absolute w-full pr-0 -ml-4 z-0">
            <div className="w-full aspect-square rounded-md p-4">
                <img 
                    src={src}
                    className="rounded-md"
                />

            </div>
        </div>
    )
}

export default FancyPic;