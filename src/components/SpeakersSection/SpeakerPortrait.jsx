const SpeakerPortrait = ({ src, name, role }) => {
    return(
        <div className="relative bg-main-blue w-full max-w-[400px] max-h-[467px] min-h-[380px]
            flex flex-col items-start justify-end rounded-md z-10
            "
        >    

            <img 
                src={src}
                alt="speaker bg"
                className="w-full object-cover"
            />

            <div className="pb-2 pt-2 pl-4">
                <Name name={name} />
                <Role role={role} />
            </div>

        </div>
    )
}

const Name = ({ name }) => <h1 className="text-main-gold text-lg font-bold z-10">{name}</h1>;
const Role = ({ role }) => <h1 className="text-main-gold z-10">{role}</h1>;

export default SpeakerPortrait;