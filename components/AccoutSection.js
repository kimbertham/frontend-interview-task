import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

export const AccountLabel = styled.div`
  font-size: ${(props) => props.theme.typography.xl.fontSize};
  line-height: ${(props) => props.theme.typography.xl.lineHeight};
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.s};
`

export const AccountSectionEl = styled.div`
  padding: ${(props) => props.theme.space.m} 0;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};
  }
}
`
export const AccountHeadline = styled.h2`
  font-size: ${(props) => props.theme.typography['3xl'].fontSize};
  line-height: ${(props) => props.theme.typography['3xl'].lineHeight};
  font-weight: normal;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.m};
`

const AccountSection = ({ label, headline, children }) => {
  return (
    <AccountSectionEl>
      <AccountLabel>{label}</AccountLabel>
      {headline && <AccountHeadline>{headline}</AccountHeadline>}
      {children}
    </AccountSectionEl>
  )
}

export default AccountSection

AccountSection.propTypes = {
  label: propTypes.string,
  headline: propTypes.string,
  children: propTypes.node
}
