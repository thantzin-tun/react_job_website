import React from 'react'
import styled from 'styled-components'

type DividerProps = {
    marginTop?: number,
    marginBottom?: number,
}

const DividerStyle = styled.div<DividerProps>`
    width: 100%;
    height: 1px;
    background-color: #dcdcdc;
    margin-top: ${(props) => props.marginTop || 0}px;
    margin-bottom: ${(props) => props.marginBottom || 0}px;
`

export const Divider:React.FC<DividerProps> = ({...props}) => {
    return(
        <>
          <DividerStyle {...props} />

        </>
    )
}