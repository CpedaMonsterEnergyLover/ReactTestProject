import mail from "../svg/mail.svg";

function NewsCard(props) {
    return (
        <div className='p-2'>
            <div className='d-flex justify-content-around'>
                <img src={mail} alt=" " style={{width: '16px'}}/>
                <div className='text-white'>
                    {props.label}
                </div>
            </div>
        </div>
    );
}

export default NewsCard;