import React from 'react'

//stylesheet
import "../components/css/Nip.css"

const nip = () => {
    return (
        <div className='Nip'>
            <div className='title2'>
                <h1 className='heading'>The Bodega</h1>
            </div>
            <div className='bog'>
                <p className='ex1'>The feline fiendz bodega is a our take on the traditional nft marketplace. </p>
                    <p>It currently lives entirely in our discord and the currency is called $NIP.</p> 
                    <p>In the Bodega you can purchase not only desireable NFTs but also whitelist opportunities,</p>
                    <p>NFT raffle tickets, physical merchandise, and custom 1/1 art experiences.</p>
                    <p className='pgr23'>The Bodega is powered by $NIP, which you can collect simply by owning fiendz.</p> 
                    <p>Instead of forcing holders to stake their nfts, the $NIP system allows your property to stay in your wallet.</p>
                   <p> The more fiendz you hold in your wallet, the more $NIP you can collect every day.</p>
                   <p> Find out more about the Bodega and browse it's contents in the <a href='https://discord.com/channels/934616456015007815/953830951811686470' target="_blank" rel="noreferrer">discord.</a></p>
            </div>
            <div className='cash'>
                <h1 className='title3'>$NIP</h1>
            </div>
            <div className='ykyk'>
                <p className='ex2'>
                   The native currency for the bodega is called $nip. 
                </p>
                <p>The amount 0f $nip you earn per day, corresponds to how many fiendz you own.</p>
                <p>The more fiendz you own, the more $nip you earn per day</p>
                <p>$Nip has to be collected in our discord. </p> 
                <p>For more information go to our discord server.</p>
            </div>
            <footer className='footer'>@FelineFiendz</footer>
        </div>
    )
}

export default nip