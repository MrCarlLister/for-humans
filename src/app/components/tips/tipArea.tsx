export default function tipArea(props: { content: { type: string, html: string }[] }) {
   
    const contentArray = props.content;


    return (
        <div className="px-4 pt-6 pb-12 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6 prose xl:prose-lg prose-img:mx-auto prose-img:max-w-96 prose-figcaption:text-center">
            {contentArray.map((detail,id) => (

                (['bonus', undefined].includes(detail.type)) ?
                    <div id={`section-${id}`} key={id} className={detail.type == 'bonus' ? 'bg-secondary-200 rounded-md p-8 flex justify-center items-center' : ''}>
                        <div  dangerouslySetInnerHTML={ { __html: detail.html } } />
                        <hr/>
                    </div>
                
                : 
                    <blockquote id={`section-${id}`} key={id}>
                        <div dangerouslySetInnerHTML={ { __html: detail.html } } />
                    </blockquote>
           
        ))}
        <hr/>
            <p>Thanks for reading!</p>
        </div>
        
    )

}
