import styled from "styled-components"
import { border } from "../styled/border"

export const SearchWrap = border({
    Comp: styled.div `
        padding:.5rem;
        box-sizing: border-box;
        margin-top: .5rem;	
        div{
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background:#fff;
            color:666;
            img{
                width: 1rem;
                height: 1rem;		
                margin-right: .5rem;	
            }
        }
    `
})