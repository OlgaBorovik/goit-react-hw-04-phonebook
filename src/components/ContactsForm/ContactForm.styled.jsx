import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
`
export const Label = styled.label`
display: flex;
flex-direction: column;
font-size: 18px;
margin-bottom: 16px
`

export const Input = styled.input`
width: 250px;
height: 30px;
border-radius: 5px;
margin-top: 8px;
font-size: 16px;
&:hover {
    border-color: blue;
}
`
export const Button = styled.button`
width: 150px;
height: 30px;
border-radius: 5px;
border:none;
background-color: lightblue;
font-size: 16px;
&:hover{
    background-color: blue;
    color: white;
}
`