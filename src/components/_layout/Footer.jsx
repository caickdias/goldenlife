const Footer = () => {

    const now = new Date();

    return(
        <footer className="w-full text-center items-center justify-center bg-blue-950 text-black py-2">            

            <h1 className="text-white font-bold">Todos os direitos reservados. {now.getFullYear()}</h1>
        </footer>
    )
}

export default Footer;