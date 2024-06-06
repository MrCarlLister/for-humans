
import { classNames } from 'utils/helper';
const statuses = {
    'Complete': 'text-green-700 bg-green-50 ring-green-600/20',
    'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
    'Archived': 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
  }
const projects = [
    {
      id: 1,
      name: 'GraphQL API',
      href: '#',
      status: 'Complete',
      createdBy: 'Leslie Alexander',
      dueDate: 'March 17, 2023',
      dueDateTime: '2023-03-17T00:00Z',
    },
    {
      id: 2,
      name: 'New benefits plan',
      href: '#',
      status: 'In progress',
      createdBy: 'Leslie Alexander',
      dueDate: 'May 5, 2023',
      dueDateTime: '2023-05-05T00:00Z',
    },
    {
      id: 3,
      name: 'Onboarding emails',
      href: '#',
      status: 'In progress',
      createdBy: 'Courtney Henry',
      dueDate: 'May 25, 2023',
      dueDateTime: '2023-05-25T00:00Z',
    },
    {
      id: 4,
      name: 'iOS app',
      href: '#',
      status: 'In progress',
      createdBy: 'Leonard Krasner',
      dueDate: 'June 7, 2023',
      dueDateTime: '2023-06-07T00:00Z',
    },
    {
      id: 5,
      name: 'Marketing site redesign',
      href: '#',
      status: 'Archived',
      createdBy: 'Courtney Henry',
      dueDate: 'June 10, 2023',
      dueDateTime: '2023-06-10T00:00Z',
    },
]


export default function tipSideBar(props) {

    const references = props.content.reference;

   
    if (!Array.isArray(references) || references.length === 0) {
        return null;
    }

    return (
        // check if the reference is an array
        
        <div className="shrink-0 border-t border-gray-200 px-4 sm:px-6 lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6 ">
            <ul role="list" className="divide-y divide-gray-100 py-8 xl:px-8 bg-white rounded-md">
                <h2 className="font-serif text-2xl font-bold text-black">Reference</h2>
                {references.map((reference) => (
                     <li key={reference.id} className="flex items-center justify-between gap-x-6 py-5">
                     <div className="min-w-0">
                       <div className="flex items-start gap-x-3">
                           <p className="text-sm font-semibold leading-6 text-gray-900">{reference.text}</p>
                           {/* <p
                               className={classNames(
                                   statuses[reference.status as keyof typeof statuses], // Add index signature
                                   'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                               )}
                           >
                               {reference.status}
                           </p> */}
                       </div>
                       
                     </div>
                     <div className="flex flex-none items-center gap-x-4">
                       <a
                         href={reference.link}
                         className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                       >
                         View reference
                       </a>
                       
                     </div>
                   </li>
                 ))}
      
    </ul>
        </div>
        
    )

}
