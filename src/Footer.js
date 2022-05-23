import styled from "styled-components"


export default function Footer(props){
    return(
        <>
        <FooterClass>
         {props.children}
         </FooterClass>
        </>
    )
}
const FooterClass = styled.div`
position:fixed;
bottom:0px;
left: 0;
background-color: 
#9EADBA;
width:100%;
height:117px;
display:flex;
align-items: center;
justify-content: flex-start;

`