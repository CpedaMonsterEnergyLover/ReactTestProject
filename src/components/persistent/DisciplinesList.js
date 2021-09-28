import Discipline from "../temporary/Discipline";

const roboto_text = "Содержание дисциплины охватывает круг вопросов, связанных с элементной базой систем автоматического управления и, в частности, измерительными преобразователями информации. Рассматриваются вопросы, связанные с конструктивными и схемными решениями современных измерительных преобразователей параметрического и генераторного типа, их основные характеристики и требования, предъявляемые к ним, как элементам систем автоматики."

function DisciplinesList() {
    return (
        <div className="container-fluid mb-5 d-flex flex-column">
            <Discipline label='Алгоритмы'/>
            <Discipline label='Мехатроника'/>
            <Discipline label='Силовые машины'/>
            <Discipline label='Фотоника и радиоэлектроника'/>
            <Discipline label='Робототехника' opened='true' description={roboto_text}/>
        </div>
    );
}

export default DisciplinesList;