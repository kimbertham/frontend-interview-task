/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components'

export const InfoText = styled.div`
  line-height: 1.6;
  font-size: ${(props) => props.theme.typography.m.fontSize};
  color: ${(props) => props.theme.colors.neutral[600]};
`

// would add other margin/padding props for quick reusable div el
export const FlexDiv = styled.div`
display: flex;
margin-bottom: ${(props) => props.mb ? props.theme.space[props.mb] : 'auto' };
justify-content: ${(props) => props.justify || 'auto'};
align-items:  ${(props) => props.align || 'auto'};
`

export const HighlightedBubble = styled.div`
color:  ${(props) => props.theme.colors.positive[200]};
background:  ${(props) =>props.theme.colors.positive[100]};
border-radius: 20px;
font-weight: 500;
padding: ${(props) => `${props.theme.space.xs}  ${props.theme.space.l}`};
font-size: ${(props) => props.theme.typography.s.fontSize};
`

export const Inset = styled.div`
  padding: 0 ${(props) => props.theme.space.m};
`
