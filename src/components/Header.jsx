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
    background-color: #ffe000;
    display: flex;
    justify-content: space-around;
    align-items: center;


&& ul li{
    list-style: none;
    font-size: 1.5rem;
}

&& ul{
    display: flex;
    gap: 15px;
}

&& .logo img{
    width: 60px;
    border-radius: 50%;
}


`


export default Header