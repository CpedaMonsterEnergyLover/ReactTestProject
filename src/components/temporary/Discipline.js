import React, {useState} from "react";
import './Discipline.css'
import arrow_up from '../svg/arrow_up.svg'
import arrow_down from '../svg/arrow_down.svg'


function Discipline (props) {
    const [isOpen, setIsOpen] = useState(props.opened);
    return(
        <div className="collapsible pb-2 ">
            <button className={'vert-align d-flex justify-content-between' +
            (isOpen ? " toggle-d-opened" : " toggle-d")}
                    onClick={() => setIsOpen(!isOpen)}>
                <strong className="mx-4">
                    {props.label}
                </strong>
                <div className="mx-4">
                    {(isOpen &&
                        <img src={arrow_up} alt=" " style={{width: '16px'}}/>
                    )||( !isOpen &&
                        <img src={arrow_down} alt=" " style={{width: '16px'}}/>

                    )}
                </div>
            </button>
            {isOpen &&
                <div className="content-d p-4 pt-0">
                    {props.description ||
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, amet atque cupiditate doloribus enim, et exercitationem fugit ipsum nihil nobis numquam perferendis porro praesentium quas quos saepe veniam veritatis voluptatibus.
                        </p>
                    }
                </div>
            }
        </div>
    );
}

export default Discipline;