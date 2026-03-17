

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


  const Tiplist = async (props: { currentId: number, noToShow: number, rand: boolean, showInactive: boolean }) => {
    const filePath = path.join(process.cwd(), 'public', 'tips.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const tips: Tip[] = JSON.parse(jsonData);
    const shuffledTips = props.rand ? [...tips].sort(() => Math.random() - 0.5) : tips; // quick shuffle
    // var counter = 0;
    
  
    return (
        <div className="rounded-lg flex flex-col sm:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
            shuffledTips
            .filter(tip => tip.id !== props.currentId) // remove current
            .filter(tip => tip.active || props.showInactive) // only active ones or show inactive
            .slice(0, props.noToShow) // limit AFTER filtering
            .map((tip) => (

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
            ))
            }
        </div>
    );
  };
  
  export default Tiplist;