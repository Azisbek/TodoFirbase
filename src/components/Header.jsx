import styled from "styled-components"

const Header = ()=>{
    return(
        <HeaderStyle>
            <div className="logo"><img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D" alt="" srcset="" /></div>
            <nav>
                <ul>
                    <li>syrttan</li>
                    <li>amantur</li>
                    <li>azis</li>
                    <li>talgat</li>
                </ul>
            </nav>
        </HeaderStyle>

    )
}

const HeaderStyle = styled.header`
background-color: red;

ul{
    
}
`


export default Header