
import { classNames } from 'utils/helper';
import TipArea from 'components/tips/tipArea';


export default function tipArea(props) {
   
    const contents = props.content.content;


    return (
        <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6 prose xl:prose-lg">
            {contents.map((content:string) => (
                <div>
                    <div  dangerouslySetInnerHTML={ { __html: content } } />
                    <hr/>
                </div>
            ))}
        </div>
        
    )

}
