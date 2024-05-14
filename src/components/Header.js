import Logo from "./Logo"
import SearchBar from "./SearchBar"
import Tabs from "./Tabs"

function Header(props) {  

    return (
        <div className="container-header">
            <div className="header">
                <Logo />
                <SearchBar searchStringAction={props.searchStringAction} />
                <Tabs searchSectionAction={props.searchSectionAction}/>
            </div>
        </div>
    )
}

export default Header