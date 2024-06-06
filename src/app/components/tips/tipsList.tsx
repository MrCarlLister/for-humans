

import fs from 'fs';
import path from 'path';

import TipsCard from './tipsCard';
import TipsCardInactive from './tipsCardInactive';

  

type Tip = {
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


  const Tiplist = async () => {
    const filePath = path.join(process.cwd(), 'public', 'tips.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const tips: Tip[] = JSON.parse(jsonData);
  
    return (
        <div className="rounded-lg flex flex-col sm:grid sm:grid-cols-3 gap-8">
            {tips.map((tip) => (
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
            ))}
        </div>
    );
  };
  
  export default Tiplist;