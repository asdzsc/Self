import styled from "styled-components"

export const HeadWrap = styled.div `
    height: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
    font-size: 0.25rem;
    background: #ee742f;
    color:#fff;
`
export const SwiperWrap = styled.div `
    img{
        width:100%;
    }
`
export const HotCateWrap = styled.div `
    header{
        line-height:2.5rem;
        background:#fff;
        padding-left:.5rem;
        border-bottom:1px solid #ccc;
    }
        .item{
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width:55%;
            }
            span{
                margin-top:5px;
            }
        }

`