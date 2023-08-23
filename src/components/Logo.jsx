import logo from '../assets/logo.png';

const Logo = () => {
    return(
        <a
            href="#"
        >
            <img 
                src={logo}
                alt="logo"
                className='w-36'
            />
        </a>
    )
}

export default Logo;