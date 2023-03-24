import styled from "styled-components";

export const FriendSection = styled.section`
`

export const FriendsList = styled.ul`
text-align:center;
padding: 10px;
font-weight:700;
width:100%;
padding:0;
`

export const Item = styled.li`
display:flex;
align-items: center;
background-color:white;
border-radius: 4px;
box-shadow: 3px 3px 5px #00002030;
margin-bottom:10px;

`

export const Status = styled.span`
width:10px;
height:10px;
border-radius:50%;
background-color: ${props => (props.isOnline ? 'green':'red')};
margin-left:10px;
margin-right: 20px;

`

export const Avatar = styled.img`
border-radius:10%;
border: 1px solid grey;
width:40px;
margin-right: 20px;

`

export const Name = styled.p`
font-weight:500;
`