import React from 'react'
import { styled } from 'styled-components'

const Thing = styled.div.attrs(() => ({
    tabIndex: 0
}))`
   color:blue;
   
   &:hover{
    color: red // <Thing> when hovered
   };

   & ~ &{
    background-color: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
   };

   & + &{
    background: lime; // <Thing> next to <Thing>
   };

   &.something{
    font-size: 30px;  // <Thing> tagged with an additional CSS class ".something"
   };
   .something-else &{
background-color: green; // <Thing> inside another element labeled ".something-else"

   }
`

function LearnSingleAmpersand() {
    return (
        <>
            <Thing>Hello world!</Thing>
            <div>
                <Thing>Hello world! 2</Thing>
                <Thing className='something'>Hello world! 3</Thing>
            </div>
            <div className='something-else'>
                <Thing>Hello world! 4</Thing>
            </div>
            <Thing>Hello world! 5</Thing>

        </>
    )
}

export default LearnSingleAmpersand
