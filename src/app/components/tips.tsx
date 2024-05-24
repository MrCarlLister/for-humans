import {
    ArrowRightCircleIcon,
    Bars3Icon,
    FireIcon,
    IdentificationIcon,
    ShieldCheckIcon,
    UsersIcon,
  } from '@heroicons/react/24/outline'
  
  const actions = [
    {
      title: 'UX Tip 1 — How to avoid bland buttons',
      desc: '3 tips to boost your button performance',
      href: '#',
      icon: ArrowRightCircleIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
    },
    {
      title: 'UX Tip 2 — All about forms',
      desc: '🛠️ 3 Quick Fixes for Form Success',
      href: '#',
      icon: IdentificationIcon,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
    },
    {
      title: 'UX Tip 3 — Contextual Content 🫦',
      desc: '✍️ Writing content for users, not your business',
      href: '#',
      icon: UsersIcon,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
    },
    {
      title: 'How a lil` UX can grow your business',
      desc: '👀 But what is "UX"!',
      href: '#',
      icon: FireIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
    },
    {
      title: 'UX Tip 4 — Making navigation easy',
      desc: 'It\'s more than a hamburger 🍔',
      href: '#',
      icon: Bars3Icon,
      iconForeground: 'text-rose-700',
      iconBackground: 'bg-rose-50',
    },
    {
      title: 'UX Tip 5 — Heroes and Headlines: Crafting Impactful Copy',
      desc: 'Master Benefit-Oriented Headlines!',
      href: '#',
      icon: ShieldCheckIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Tips() {
    return (
      <section className=" bg-gray-200 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl text-black font-serif block mb-12 font-bold max-w-sm">User experience and web design tips</h2>

        <div className="overflow-hidden rounded-lg sm:grid sm:grid-cols-3 sm:gap-8 ">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
            //   actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
            //   actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            //   actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            //   actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
              'group relative bg-white p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg'
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'inline-flex rounded-lg p-3 ring-4 ring-white'
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {action.desc}
              </p>
            </div>
            <span
              className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
      </div>
      </section>
    )
  }
  