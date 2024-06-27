
export default function tipSideBar(props: { content: { reference: { id: number, text: string, link: string, status: string }[], inspo: { id: number, link: string } } }) {

    const references = props.content.reference;
    const inspiration = props.content.inspo;

    // put both references and inspirations into an object 
    // and return them as a list

    const sidebarList = {
        references,
        inspiration
    };
   
    return (
        
        <aside className=" mx-8 lg:mx-0 pb-8 lg:pb-0">
            <div className="flex flex-col md:flex-row lg:flex-col gap-8 sticky top-8">
            { !Array.isArray(references) || references.length === 0 ? '' :
            <div className="shrink-0 border-t border-gray-200  lg:w-96 lg:border-l lg:border-t-0 ">
                <ul role="list" className="divide-y divide-gray-100 py-8 px-8 bg-white rounded-md">
                    <h2 className="font-serif text-2xl font-bold text-black">Reference ✍️</h2>
                    {references.map((reference) => (
                        <li key={reference.id} className="flex items-center justify-between gap-x-6 py-5">
                        <div className="min-w-0">
                        <div className="flex items-start gap-x-3">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{reference.text}</p>
                            
                        </div>
                        
                        </div>
                        <div className="flex flex-none items-center gap-x-4">
                        <a
                            href={reference.link}
                            className="rounded-md bg-white px-2.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            target="_blank"
                        >
                            View reference
                        </a>
                        
                        </div>
                    </li>
                    ))}
        
                </ul>
            </div>
            }

            { inspiration.link === undefined ? '' :
            <div className="shrink-0 border-t border-gray-200  lg:w-96 lg:border-l lg:border-t-0  ">
                <ul role="list" className="divide-y divide-gray-100 py-8 px-8 bg-white rounded-md">
                    <h2 className="font-serif text-2xl font-bold text-black mb-3">Inspiration 💡</h2>
                    
                        <div className="inline-flex flex-col justify-between gap-y-6">
                        <div>
                            Get inspired with some examples
                        </div>
                        
                        
                        <div><a
                            href={inspiration.link}
                            className="rounded-md bg-white px-2.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            target="_blank">
                            View examples
                        </a></div>
                        
                    </div>
                    
        
                </ul>
            </div>
}
</div>
        </aside>
        
    )

}
