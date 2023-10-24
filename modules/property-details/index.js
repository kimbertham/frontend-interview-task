/* eslint-disable no-empty-pattern */
/* eslint-disable max-statements */
import { add, format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { Button } from '../../components/button'
import RowContainer from '../../components/row-container'
import AccountListComp from '../../components/AccountList'
import { Inset } from './style'
import AccountSection from '../../components/AccoutSection'
import axios from 'axios'

const Detail = ({}) => {
  const [account,setAccount] = useState()

  useEffect(() => {
    const getData =  async () => {
      const res = (await axios.get('/api/account')).data.account
      setAccount(res)
    }

    getData()
  }, [])

  if (!account ) return null

  //estimatedValue
  const lastUpdate = new Date(account.lastUpdate)
  const estimatedValueHead = new Intl.NumberFormat('en-GB', { style: 'currency',  currency: 'GBP' }).format(account.recentValuation.amount)
  const estimatedValueUpdate = `Last updated ${format(lastUpdate, 'do MMM yyyy')}`
  const estimatedValueNextUpdate = `Next update ${format(add(lastUpdate, { days: account.updateAfterDays }),'do MMM yyyy' )}` 

  //ValuationChange
  const purchasedTitle = `Purchased for £${account.originalPurchasePrice} in ${format( new Date(account.originalPurchasePriceDate),'MMMM yyyy')}`
  const sincePurchase = account.recentValuation.amount - account.originalPurchasePrice
  const sincePurchasePercentage = sincePurchase / account.originalPurchasePrice * 100
  const annualAppreciation = sincePurchasePercentage / (format(new Date(), 'yyyy') - format(new Date(account.originalPurchasePriceDate), 'yyyy'))

  //Mortgage
  let mortgage
  if (account.associatedMortgages.length) mortgage = account.associatedMortgages[0]
  const mortgageAmount = new Intl.NumberFormat('en-GB', { style: 'currency',currency: 'GBP' }).format(Math.abs(account.associatedMortgages[0].currentBalance))
  const mortgageTitle = account.associatedMortgages[0].name
  

  const sections = [{
    title: 'Estimated Value',
    condition: true,
    headline: estimatedValueHead,
    list: [
      estimatedValueUpdate,
      estimatedValueNextUpdate
    ]
  },{
    title: 'Property details',
    condition: true,
    list: [
      account.name,
      account.bankName,
      account.postcode
    ]
  },{
    title: 'Valuation change',
    condition: true,
    list: [
      purchasedTitle,
      { title: 'Since Purchase',
        value: `£ ${sincePurchase} (${sincePurchasePercentage}%)`
      },
      { title: 'Annual Appreciation',
        value: annualAppreciation + '%'
      }] 
  },{
    title: 'Mortgage',
    condition: mortgage,
    rowContainer: () => alert('You have navigated to the mortgage page'),
    list: [
      mortgageAmount,
      mortgageTitle
    ]
  }]


  return (
    <Inset>
    
      {sections.map(section => (
        section.condition &&
        <AccountSection key={section.title} label={section.title} headline={section.headline}>
          <RowContainer onClick={section.rowContainer}>
            <AccountListComp 
              list={section.list} />
          </RowContainer>
        </AccountSection>
      ))}
      
      <Button onClick={() => alert('You have navigated to the edit account page')} >
        Edit account
      </Button>
    </Inset>
  )
}

export default Detail
