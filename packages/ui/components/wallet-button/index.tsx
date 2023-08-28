import React from 'react'

interface WalletButtonProps {
  children?: React.ReactNode
}

function WalletButton({children}: WalletButtonProps): JSX.Element {
  return (
    <div>
      <h1>WalletButton</h1>
      {children}
    </div>
  )
}

export default WalletButton