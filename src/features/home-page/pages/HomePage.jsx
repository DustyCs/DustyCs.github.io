import React from 'react'
import ComponentSlider from '../components/SlideShow'

function Introduction(){
    return (
        <div>Introduction</div>
    )
}

function LatestProject(){
    return (
        <div>Latest Project</div>
    )
}

function LatestGame(){
    return (
        <div>Latest Game</div>
    )
}

export default function HomePage() {
  return (
    <div className='h-full'>
        <ComponentSlider slides={[Introduction, LatestProject, LatestGame]}/>
    </div>
  )
}
