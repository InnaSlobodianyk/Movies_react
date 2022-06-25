import classes from './Header.module.scss';
import logo from "../../images/movierise-logo.png";

const Header = () => {
    return (
        <header className={classes['header']}>
            <div className={classes['header__container']}>
                <a href="/" className={classes['header__logo']}>
                    <img src={logo} alt="logo-movierise" />
                </a>
                <nav className={classes['header__menu']} role="navigation">
                    <a href="/favorites/" className={classes['header__menu-link']}>
                        <i className="fa fa-bookmark" />
                        <span className={classes['header__menu-link-name']}>Favorites</span>
                        <span className={classes['header__menu-num']} />
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
