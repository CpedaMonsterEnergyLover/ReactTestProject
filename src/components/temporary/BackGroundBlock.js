import './BackGroundBlock.css'
import ContactBlock from "../persistent/BackGroundBlocks/ContactBlock";

function BackGroundBlock (props) {

    return(
        <div className='bg-base'>
            <div>
                <img src={props.bg} alt="Background" className="bg" />
            </div>
            {props.first &&
                <div className='bg-first'>

                </div>
            }
            {props.second &&
                <ContactBlock/>
            }

        </div>
    );
}

export default BackGroundBlock;