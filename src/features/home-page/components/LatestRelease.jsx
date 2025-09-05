import RPSOnline from "../../../assets/projects/RPS.png";
import { latestRelease }from '../data/latest-release'

export default function LatestRelease() {
  console.log(latestRelease.images);
  return (
    <div className='w-full col-span-1 sm:max-h-[25rem]'>
        <div className='flex sm:flex-row flex-col items-center sm:items-end justify-around h-full overflow-auto'>
            {/* only one image at a time - size 560x320 */}
              {
                latestRelease.images.map((img, index) => (
                    <img key={index} src={img} className='w-[100%] max-w-[35rem] max-h-[20rem]' alt="" />
                ))
              }
            <div className="mt-1 bg-white sm:h-[90%] sm:p-4">
              <h1 className='text-4xl px-4'>Latest Release</h1>
              <h2 className='text-2xl'>{latestRelease.title}</h2>
              <p className='text-lg my-2'>{latestRelease.description}</p>
              <a href={"https://"+latestRelease.url} target="_blank" rel="noreferrer" className='text-blue-600 underline'>{latestRelease.url}</a>
            </div>
        </div>
    </div>
  )
}
