import parse from 'html-react-parser';

const Paragraph = ({ text }) => {
    return(
        <h1 className='text-lg my-4 leading-[1.8] text-main-text'>
            {parse(text)}
        </h1>
    )
}

export default Paragraph;