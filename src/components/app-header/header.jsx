import "./header.scss";

const Header = () => {
  return (
        <header className="header">
            <h1 className="header__title">наша продукция</h1>
            <div className="header__cart">
                <div className="header__goods">3 товара <br /> на сумму 3500 Р</div>
                <div className="header__logo"></div>
            </div>
        </header>
  );
}

export default Header;