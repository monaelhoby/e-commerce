
import styled from 'styled-components';


export const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all .6s ease-in-out;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all .3s ease-in-out
}
&:hover{
    .card{
        border:.04rem solid rgba(0,0,0,.2);
        box-shadow:2px 2px 5px 0 rgba(0,0,0,.3)
    }
    .card-footer{
        background:rgb(247,247,247);
    }
}
.img-container{
    padding-top:20px;
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all .5s ease-in-out;
    width:60% !important;
    height:80% !important
}
.img-container:hover .card-img-top{
    transform:scale(1.18)
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:.2rem .4rem;
    background:var(--lightColor);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:.5rem 0 0 ;
    transform:translate(100%,100%);
    transition:all .6s ease-in-out
}
.img-container:hover .cart-btn{
    transform:translate(0,0)
}
.cart-btn:hover{
    color:var(--mainColor)
}
`;