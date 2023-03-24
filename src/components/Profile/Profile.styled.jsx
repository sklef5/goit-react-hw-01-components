import styled from "styled-components";

export const ProfileBox = styled.div`
display : flex;
flex-direction: column;
align-items: center;
width :350px;
background-color:white;
`

export const Description = styled.div`
text-align: center;
`
export const Avatar = styled.img`
margin:20px 0;
width:150px;
border-radius:50%;
border: 1px solid grey;
`

export const Name = styled.div`
padding-top:10px;
padding-bottom:10px;
font-size:20px;
font-weight:700;
`

export const Tag = styled.div`
padding-top:10px;
padding-bottom:10px;
font-size:15px;
`

export const Location = styled.div`
`
export const Stats = styled.ul`
display:flex;
width:100%;
padding:0;
}
`

export const Info = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: calc(100% / 3);
height: 80px;
background-color: #00004F0F;
border: 1px solid #00000010;
:first-of-type {
    border-radius: 0 0 0 4px;
  }
  :last-of-type {
    border-radius: 0 0 4px 0;
  }
`
export const Label = styled.span`
color:grey;
font-weight:400;
margin-bottom:10px

`
export const Quantity = styled.span`
color:black;
font-weight:700;
`