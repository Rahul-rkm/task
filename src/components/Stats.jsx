import React from 'react'
import StatsItem from './StatsItem'
import box from './icons/box.svg'
import atom from './icons/atom.svg'
import like from './icons/like.svg'
import check from './icons/check.svg'
function Stats() {
  return (
    <div className='stats'>
        <StatsItem title={`PENDING ORDERS`} number={202} icon={box}/>
        <StatsItem title={`PROCESSING ORDERS`} number={99} icon={atom}/>
        <StatsItem title={`READY TO DELIVER`} number={263} icon={like}/>
        <StatsItem title={`DELIVERED ORDERS`} number={365} icon={check}/>
    </div>
  )
}

export default Stats