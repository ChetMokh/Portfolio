import "./topbar.scss"
import { Person, Mail} from '@material-ui/icons';

export default function TopBar({openMenu, setMenuOpen}) {
    return (
        <div className={"topbar " + (openMenu && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro"className="logo">.arash</a>
                    <div className="itemContainer">
                        <Person />
                        <span>+1 408 472 1693</span>
                    </div>
                    <div className="itemContainer">
                        <Mail />
                        <span>arash@formul.io</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!openMenu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
