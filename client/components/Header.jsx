import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'

import { images } from '../constants'
import { TransactionContext } from '../context/TransactionContext'

const style = {
  wrapper: `p-4 w-screen flex justify-between item-center`,
  headerLogo: `flex w-1/4 items-center justify-start`,
  nav: `flex-1 flex justify-center items-center`,
  navItemsContainer: `flex bg-[#191B1F] rounded-3xl`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activeNavItem: `bg-[#20242A]`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonPadding: `p-2`,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
  flex__AC: `flex items-center`,
}

const Header = () => {
  const [selectedPage, setSelectedPage] = useState('swap')
  const { connectWallet, currentAccount } = useContext(TransactionContext)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    currentAccount &&
      setUserName(
        `${currentAccount.slice(0, 7)} ..... ${currentAccount.slice(35)}`
      )
  }, [currentAccount])

  console.log({ connectWallet, currentAccount })
  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={images.uniswap} alt="uniswap" height={40} width={40} />
      </div>
      <div className={style.nav}>
        <div className={style.navItemsContainer}>
          {['swap', 'Pool', 'Vote', 'Charts'].map((item, idx) => {
            if (item === 'Charts') {
              return (
                <a
                  key={item + idx}
                  href="https://info.uniswap.org/#"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className={style.navItem}>
                    Charts <FiArrowUpRight />
                  </div>
                </a>
              )
            } else {
              return (
                <div
                  key={item + idx}
                  className={`${style.navItem} ${
                    selectedPage === item && style.activeNavItem
                  }`}
                  onClick={() => setSelectedPage(item)}
                >
                  {item}
                </div>
              )
            }
          })}
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
            <Image src={images.eth} alt="eth logo" height={20} width={20} />
          </div>
          <p>Ethereum</p>
          <div className={style.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>
        {currentAccount ? (
          <div className={`${style.button} ${style.buttonPadding}`}>
            <div className={style.buttonTextContainer}>{userName}</div>
          </div>
        ) : (
          <div
            onClick={() => connectWallet()}
            className={`${style.button} ${style.buttonPadding}`}
          >
            <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
              Connect Wallet
            </div>
          </div>
        )}
        <div
          onClick={() => connectWallet()}
          className={`${style.button} ${style.buttonPadding}`}
        >
          <HiOutlineDotsVertical />
        </div>
      </div>
    </div>
  )
}

export default Header
