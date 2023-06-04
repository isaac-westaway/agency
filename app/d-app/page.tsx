"use client";

import detectEthereumProvider from '@metamask/detect-provider'
import { useEffect, useState } from 'react';

const DApp = () => {
    const [hasProvider, setHasProvider] = useState<boolean | null>(null)
    const initialState = { accounts: [] }
    const [wallet, setWallet] = useState(initialState)

    useEffect(() => {
        const refreshAccounts = (accounts: any) => {                
          if (accounts.length > 0) {                                
            updateWallet(accounts)                                  
          } else {                                                  
            // if length 0, user is disconnected                    
            setWallet(initialState)                                 
          }                                                         
        }                                                           
    
        const getProvider = async () => {
          const provider = await detectEthereumProvider({ silent: true })
          setHasProvider(Boolean(provider))
    
          if (provider) {                                           
            const accounts = await window.ethereum.request(         
              { method: 'eth_accounts' }                            
            )                                                       
            refreshAccounts(accounts)                               
            window.ethereum.on('accountsChanged', refreshAccounts)  
          }                                                         
        }
    
        getProvider()
        return () => {                                              
          window.ethereum?.removeListener('accountsChanged', refreshAccounts)
        }                                                           
      }, [])

    const updateWallet = async (accounts:any) => {
        setWallet({ accounts })
    }

    const handleConnect = async () => {
        let accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        })
        updateWallet(accounts)
    }                                                  

    return (
        <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover z-50
        w-full
        '>
          {/* Overlay */}
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#323232] z-[2]' />
          <div className='p-5 text-[#FFFFF7] z-[2] mt-[-10rem]'>
          <h2 className="text-4xl text-center">Injected Provider { hasProvider ? 'DOES' : 'DOES NOT'} Exist</h2>
                { window.ethereum?.isMetaMask && wallet.accounts.length < 1 &&
                    <>
                        <div className="pt-3">
                            <button onClick={handleConnect} className='px-8 py-2 border justify-center items-center w-full rounded-xl hover:bg-white hover:text-black transition ease-in-out duration-300'>Connect Wallet</button>
                        </div>
                    </>
                }
                { wallet.accounts.length > 0 &&
                    <>
                        <div className="pt-3 text-xl text-center">
                            Wallet Accounts: { wallet.accounts[0] }
                        </div>
                    </>
                }
          </div>
        </div>
    );
}
 
export default DApp;