
import fs from 'fs';
import path from 'path';
import { classNames } from 'utils/helper';
import TipArea from 'components/tips/tipArea';
import TipSidebar from 'components/tips/tipSideBar';

// export async function generateStaticParams() {
//     const filePath = path.join(process.cwd(), 'public', tip.id, 'data.json');
//     const jsonData = fs.readFileSync(filePath, 'utf8');
//     const tips: Tip[] = JSON.parse(jsonData);
  
//     return tips.map((tip) => ({
//       slug: tip.href,
//     }));
//   }
type Tip = {
    content: string[];
    inspo: string[];
    reference: string[];
};


export default function mainContent(props) {

    // convert props.id to string
    const id = props.id.toString();

    const filePath = path.join(process.cwd(), 'public', 'tips', id, 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const tips: Tip[] = JSON.parse(jsonData);
    // const tips = JSON.parse(jsonData);
  

   

    return (
        <div className='bg-gray-200 text-black py-24'>
            {/* 3 column wrapper */}
            <div className="mx-auto w-full max-w-7xl grow lg:flex">
                {/* Left sidebar & main wrapper */}
                <div className="flex-1 xl:flex  xl:px-8 bg-white rounded-md">

                    <TipArea content={tips} />
                
                    
                </div>

                <TipSidebar content={tips} />
            </div>
      </div>
        
    )

}
