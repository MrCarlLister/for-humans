export default function tipArea(props: { content: { type: string, html: string }[] }) {
   
    const contentArray = props.content;


    return (
        <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6 prose xl:prose-lg">
            {contentArray.map((detail,id) => (
                <div id={`section-${id}`} key={id} className={detail.type == 'bonus' ? 'bg-secondary-200 rounded-md p-8 flex justify-center items-center' : ''}>
                    <div  dangerouslySetInnerHTML={ { __html: detail.html } } />
                    <hr/>
                </div>
            ))}
        </div>
        
    )

}
