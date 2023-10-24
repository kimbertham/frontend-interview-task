import React from 'react'
import { InfoText, FlexDiv, HighlightedBubble } from '../modules/property-details/style'
import styled from 'styled-components'

export const AccountListEl = styled.ul`
  width: 100%;
  list-style: none;
  padding-left: 0;
`

export const AccountListItem = styled.div`
  display: flex;
  &:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.space.m};
  }
`

const AccountList = ({ list }) => {
  return (
    <AccountListEl>
      {list.map((item,i) =>  
      
        item.value ? 
          <FlexDiv justify='space-between' align='center' mb='s' key={i}>
            <AccountListItem style={{ margin: 0 }}>
              <InfoText>{item.title}</InfoText>
            </AccountListItem>
            <HighlightedBubble>{item.value}</HighlightedBubble>
          </FlexDiv>
          :

          <AccountListItem key={i}>
            <InfoText> {item} </InfoText>
          </AccountListItem >
          
      )}
    </AccountListEl>
  )
}

export default AccountList