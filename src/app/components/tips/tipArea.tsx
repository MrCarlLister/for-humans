export default function tipArea(props: { content: { id: number, html: string }[] }) {
   
    const contentArray = props.content;


    return (
        <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6 prose xl:prose-lg">
            {contentArray.map((detail) => (
                <div key={detail.id}>
                    <div  dangerouslySetInnerHTML={ { __html: detail.html } } />
                    <hr/>
                </div>
            ))}
        </div>
        
    )

}
