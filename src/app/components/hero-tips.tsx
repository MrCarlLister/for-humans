import { ArrowDownIcon } from '@heroicons/react/20/solid'
import MainNav from 'components/global/main-nav';
import { classNames } from 'utils/helper';




export default function HeroTips(props: { headline: string, desc: string, image: string, fg: string, bg: string, bgImage: string }) {
    // const imageUrl = props.image;

    // Inline styles with a background image
  const heroStyle = {
    backgroundImage: `url(${props.bgImage})`
  };
    

  return (
    <div style={heroStyle} className={classNames("  relative isolate overflow-hidden bg-white bg-cover bg-center bg-no-repeat")}>
        <div className={classNames(" md:bg-gradient-to-br from-white via-" + props.fg  + "-200 to-transparent " + props.bg  + "-200 from-40%  relative isolate overflow-hidden bg-white/90 lg:bg-transparent")}>
        <MainNav />
      
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 ">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8 ">
          
          <div className="mt-24 sm:mt-32 lg:mt-16 ">
            
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/10">
                Tips
              </span>
              
            
          </div>
          <h1 className="mt-10 text-4xl font-bold font-serif tracking-tight text-gray-900 sm:text-7xl">
          {props.headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {props.desc}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#section-0"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary inline-flex items-center space-x-2"
            >
              <span>Get started</span> <ArrowDownIcon className="h-5 w-5 text-blue-200" aria-hidden="true" />

            </a>
            
          </div>
        </div>
        
       
      </div>
      </div>
    </div>
  )
}
