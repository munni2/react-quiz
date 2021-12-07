import classes from'../styles/layout.module.css';
import Nav from "./Nav";

const Layout = ({children}) => {
    return ( 
        <>
            <Nav />
            <main className={classes.main}>
                <div className={classes.container}>
                    {children}
                </div>
            </main>
        </>
    );
}
 
export default Layout;