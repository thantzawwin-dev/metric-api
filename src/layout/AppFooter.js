import React from 'react'
import { FooterContainer } from '../components'

const AppFooter = () => {
  return (
    <FooterContainer>
      <div className="ms-auto">
        <span className="me-1">Powered by </span>
        <a className="footer_link"  href="https://www.abank.com.mm" target="_blank" rel="noopener noreferrer">
          A bank&copy; 2022 development
        </a>
      </div>
    </FooterContainer>
  )
}

export default React.memo(AppFooter)
