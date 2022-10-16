function NotFound() {
    let style = {
        margin: "0 auto",
        width: "1000px"
    }
    return(
        <div style = {style} className="notFound">
            404. Поздравляем. Вы сломали наш сайт
            <img style = {style} src="https://media.tproger.ru/uploads/2015/04/wanted404.jpg" alt="gg" />
        </div>
    );
}

export default NotFound