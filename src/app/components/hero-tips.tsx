import { ArrowDownIcon } from '@heroicons/react/20/solid'
import MainNav from 'components/global/main-nav';




export default function HeroTips(props) {
    // const imageUrl = props.image;
    

  return (
    <div className="relative isolate overflow-hidden bg-white bg-gradient-to-tr from-">
        <MainNav />
      
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/10">
                Tips
              </span>
              
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold font-serif tracking-tight text-gray-900 sm:text-7xl">
          {props.headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {props.desc}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#tip-1"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary inline-flex items-center space-x-2"
            >
              <span>Jump to the first tip</span> <ArrowDownIcon className="h-5 w-5 text-blue-200" aria-hidden="true" />

            </a>
            
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src={props.image}
                alt="App screenshot"
                width={1000}
                height={587}
                className="w-[1000px] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
