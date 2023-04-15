import classes from './MainHeader.module.css';
import CartButton from '../Cart/CartButton';

const MainHeader=()=>{
    return(
        <header className={classes.header}>
            <h1>Header - Welcome to the Website!</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton/>
                    </li>
                </ul>
            </nav>

        </header>
    )

}

export default MainHeader;