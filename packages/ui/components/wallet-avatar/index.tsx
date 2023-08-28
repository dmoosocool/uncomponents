import React from 'react'

interface WalletAvatarProps {
  children?: React.ReactNode
}

function WalletAvatar({children}: WalletAvatarProps): JSX.Element {
  return (
    <div>
      <h1>WalletAvatar</h1>
      {children}
    </div>
  )
}

export default WalletAvatar
