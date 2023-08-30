const Footer = () => {

    const now = new Date();

    return(
        <footer className="w-full text-center items-center justify-center bg-main-gold text-black py-4">
            <h1 className="font-bold">Todos os direitos reservados. {now.getFullYear()}</h1>
        </footer>
    )
}

export default Footer;