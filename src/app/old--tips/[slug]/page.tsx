import fs from 'fs';
import path from 'path';
   
import Hero from "components/hero-tips";
import MainContent from 'components/tips/tipsMainContent';
import Newsletter from "components/newsletter";
import Footer from "components/footer";
import Tips from "components/tips";
import type { Metadata } from "next";

interface PageProps {
    title: string;
    description: string;
  }
  
  export const metadata: Metadata = {
    title: "Default Title",
    description: "Default Description",
  };
type ReferenceItem = {
    text: string;
    link: string;
    image: string;
};

type ContentItem = {
    intro: string;
    inspo: {
        link: string;
        image: string;
    };
    reference: ReferenceItem[][];
    tips: {
        Tip1: string;
        Tip2: string;
        Tip3: string;
    };
};

type Tip = {
    id: number;
    active: boolean;
    bgImage: string;
    image: string;
    subhead: string;
    title: string;
    desc: string;
    content: ContentItem;
    href: string;
    type: string;
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

//   convert tip.id to string




  
  
  if (!tip) {
      return <div>Tip not found</div>;
    }
    
    // console.log(tip.content.reference[0]);
    // const imagePath = path.join(process.cwd(), 'public', 'tips', tip.id.toString(), tip.image);
    const imagePath = tip.id.toString() +'/'+ tip.image;
    metadata.title = "For humans | " + tip.title;
    metadata.description = tip.desc;

  
  return (
    <main>
      <Hero headline={tip.title} desc={tip.desc} image={imagePath} fg={tip.iconForeground} bg={tip.iconBackground} bgImage={tip.bgImage} />
      <MainContent id={tip.id} />
      <Tips currentId={tip.id} noToShow={3} />
      <Newsletter />
      <Footer />
    </main>
  );

 



};

export default TipDetail;