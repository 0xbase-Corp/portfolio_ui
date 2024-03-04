import { Paper } from '@mui/material'
import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin: 20px;
  background-color: #1e1e2f;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
  font-size: 10px;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const CardComponent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <CardContainer>
      <StyledPaper elevation={0}>{children}</StyledPaper>
    </CardContainer>
  )
}

export default CardComponent
