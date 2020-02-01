
import styled from "styled-components";

export const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size:1.4rem;
    background:transparent;
    border:.05rem solid var(--lightColor);
    border-color: ${props => props.cart ? "var(--secondColor)" : "var(--lightColor)"};
    color: ${props => props.cart ? "var(--secondColor)" : "var(--lightColor)"};
    border-radius:.5rem;
    padding:.2rem .6rem;
    margin:.2rem .6rem;
    cursor:pointer;
    transition:all .3s linear;
    &:hover{
        color:${props => props.cart ? "var(--mainWhite)" : "var(--mainWhite)"};
        background:${props => props.cart ? "var(--secondColor)" : "var( --lightColor)"};
    };
    &:focus{
        outline:none
    }
`;
export const NavWrapper = styled.nav`
    background:var(--darkColor);
    .nav-link{
        color:var( --mainWhite);
        font-size:1.3rem;
        text-transform:capitalize
    }
`;