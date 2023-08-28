import parse from 'html-react-parser';

const Paragraph = ({ text }) => {
    return(
        <h1 className='text-lg leading-[1.8] text-main-text my-3'>
            {parse(text)}
        </h1>
    )
}

export default Paragraph;