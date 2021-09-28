import {Row} from "react-bootstrap";
import NewsCard from "../temporary/NewsCard";

function CardsBlock() {
    return (
        <div className="container-fluid">
            <Row xs={1} sm={2} md={3} >
                <NewsCard text='Текст' label='Заголовок'/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </Row>
        </div>
    );
}

export default CardsBlock;