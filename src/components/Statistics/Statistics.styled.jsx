import styled from "styled-components";

export const StatSection = styled.section`

`
export const Title = styled.h2`
text-align:center;
background-color:white;
text-transform: uppercase;
color:grey;

`
export const StatList = styled.ul`
display:flex;
width:100%;
padding:0;
`
export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: calc(100% / 3);
height: 80px;
border: 1px solid #00000010;
background-color: ${props => props.backgroundColor};
`
export const Label = styled.span`
margin-bottom:5px;

`
export const Percentage = styled.span`
font-size:20px;

`