
import fs from 'fs';
import path from 'path';
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
    reference: { id: number; text: string; link: string; }[];
};

export default function mainContent(props: { id: number }) {

    // convert props.id to string
    const id = props.id.toString();

    const filePath = path.join(process.cwd(), 'public', 'tips', id, 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    // const tips: Tip[] = JSON.parse(jsonData);
    const tips = JSON.parse(jsonData);
    // console.log(tips.content);
  

   



    return (
        <div className='bg-gray-200 text-black lg:py-24'>
            {/* 3 column wrapper */}
            <div className="mx-auto w-full max-w-7xl grow flex flex-col lg:flex-row gap-8 lg:gap-8 lg:px-8">
                {/* Left sidebar & main wrapper */}
                <div className="flex-1 xl:flex  xl:px-8 bg-white lg:rounded-md">

                    <TipArea content={tips.content} />
                    

                </div>

                <TipSidebar content={tips} />
            </div>
      </div>
        
    )

}
