import React from 'react'

export default function GithubContributions() {
  return (
    <div className='col-span-1 flex flex-col items-center justify-center'>
        <h1 className='text-2xl px-4'>GitHub Contributions</h1>
        <img onClick={() => window.open("https://github.com/DustyCs")} src="https://ghchart.rshah.org/DustyCs" alt="GitHub Contributions Chart"
          className='shadow-xl' />
    </div>
  )
}
