import styled from "styled-components";

export const TransTable = styled.table`
width:100%
`
export const TransHeader = styled.thead`

`
export const TransRowHead = styled.tr`
height: 40px;
font-size: 15px;
text-transform: uppercase;
color: #fff;
background-color: rgb(25 129 235);
`
export const TransRow = styled.tr`
height:30px;
background-color: #ededed;
:nth-of-type(2n + 1) {
  background-color: #fff;
}

`
export const TransHeadColomn = styled.th`
`
export const TransBody = styled.tbody`
`

export const TransColomn = styled.td`
text-align:center;
color:grey;
text-transform: capitalize;
`