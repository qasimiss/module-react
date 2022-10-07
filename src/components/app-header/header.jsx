import "./header.scss";

const Header = () => {
  return (
        <header className="header">
            <h2 className="header__title">наша продукция</h2>
            <div className="header__cart">
                <div className="header__goods">3 товара <br /> на сумму 3500 Р</div>
                <div className="header__logo"></div>
            </div>
        </header>
  );
}

export default Header;