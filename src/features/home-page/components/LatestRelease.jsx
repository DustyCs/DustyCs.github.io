import React from 'react';
import RPSOnline from "../../../assets/projects/RPS.png";

export default function LatestRelease() {
  return (
    <div className='w-full'>
      <h1 className='text-4xl px-4'>Latest Release</h1>
        <div className='px-10'>
            <h3 className='text-2xl'>RPS Online</h3>
            <img src={RPSOnline} alt="" />
        </div>
    </div>
  )
}
