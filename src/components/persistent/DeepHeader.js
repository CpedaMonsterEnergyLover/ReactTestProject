import './DeepHeader.css'
import Logo1 from "../svg/logo_1.svg";
import En from "../svg/en.svg";

function DeepHeader() {
    return (
        <div className="deepHeader container-fluid">
            <div className='vert-align d-flex justify-content-between'>
                    <div>
                        <img src={Logo1} alt=" " style={{height: '24px'}}/>
                    </div>
                    <div>
                        <img src={En} alt=" " style={{width: '47px'}}/>
                    </div>
            </div>
        </div>
    );
}

export default DeepHeader;