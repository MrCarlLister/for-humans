
import Link from 'next/link';


import * as Icons from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export default function tipsCard(props) {
    const Icon = Icons[props.icon]; // Get the corresponding icon component
    const Theme = props.type === "tip" ? 'bg-black' : 'bg-gray-400';
    const iconBackground = 'bg-gray-200';
    const iconForeground = 'text-black';

    return (
        <div
              key={props.title}
              className={classNames(
                  'group relative bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg overflow-hidden speed-normal opacity-30 border-[1px] border-solid border-gray-400'
                )}
            >
                <div className={classNames(Theme,"w-full h-24 bg-gray-300 block")}>
                    <span className="absolute top-4 left-8 z-50 rounded-full bg-white text-xs text-black py-1 px-2 capitalize">{props.type}</span>
                    
                </div>
              <div className="px-8 -mt-4">
                <span
                  className={classNames(
                    iconBackground,
                    iconForeground,
                    'inline-flex rounded-lg p-3 ring-4 ring-white'
                  )}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" ></Icon>
                </span>
              </div>
              <div className="mt-8 px-8 pb-12">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold  text-black">
                  
                  
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    <span className="text-base block">{props.subhead}</span>
                    {props.title}
                  
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {props.desc}
                </p>
              </div>
              <span
                className={classNames(iconForeground,"pointer-events-none absolute right-6 top-6  speed-normal")}
                aria-hidden="true"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
    )

}
