import fs from 'fs';
import path from 'path';

type Tip = {
    active: string;
    subhead: string;
    type: string;
    title: string;
    content: string;
    desc: string;
    href: string;
    icon: string;
    iconForeground: string;
    iconBackground: string;
  };


type TipDetailProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public', 'tips.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const tips: Tip[] = JSON.parse(jsonData);

  return tips.map((tip) => ({
    slug: tip.href,
  }));
}

const TipDetail = async ({ params }: TipDetailProps) => {
  const filePath = path.join(process.cwd(), 'public', 'tips.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const tips: Tip[] = JSON.parse(jsonData);

  
  const tip = tips.find((tip) => tip.href === '/tips/'+params.slug);

  

  if (!tip) {
    return <div>Tip not found</div>;
  }

  return (
    <div>
      <h1>{tip.title}</h1>
      <p>{tip.content}</p>
    </div>
  );
};

export default TipDetail;