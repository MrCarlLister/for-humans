

import fs from 'fs';
import path from 'path';

import TipsCard from './tipsCard';
import TipsCardInactive from './tipsCardInactive';

  

type Tip = {
    id: number;
    active: boolean;
    subhead: string;
    type: string;
    title: string;
    desc: string;
    href: string;
    icon: string;
    iconForeground: string;
    iconBackground: string;
  };


  const Tiplist = async (props: { currentId: number, noToShow: number }) => {
    console.log('tip id is', props.currentId);
    console.log('no to show', props.noToShow);
    const filePath = path.join(process.cwd(), 'public', 'tips.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const tips: Tip[] = JSON.parse(jsonData);
    // var counter = 0;
  
    return (
        <div className="rounded-lg flex flex-col sm:grid sm:grid-cols-3 gap-8">
            {tips.map((tip,i) => (
                i <= props.noToShow ? 
                
                    // console.log(props.currentId === tip.id ? 'true' : 'false'),
                    props.currentId === tip.id ? '' : 

                        // return nothing if props.currentId is not equal to tip.id
                        
                        tip.active 
                            ? <TipsCard
                                key={tip.title}
                                title={tip.title}
                                iconBackground={tip.iconBackground}
                                iconForeground={tip.iconForeground}
                                icon={tip.icon}
                                href={tip.href}
                                desc={tip.desc}
                                type={tip.type}
                                subhead={tip.subhead}
                                active={tip.active}
                            />
                            : <TipsCardInactive
                                key={tip.title}
                                title={tip.title}
                                icon={tip.icon}
                                desc={tip.desc}
                                type={tip.type}
                                subhead={tip.subhead}
                            />
                : ''
            ))}
        </div>
    );
  };
  
  export default Tiplist;