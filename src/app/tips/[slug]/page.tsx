import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Head from 'next/head'
import Hero from "components/hero-tips";
import MainContent from 'components/tips/tipsMainContent';
import Newsletter from "components/newsletter";
import Footer from "components/footer";
import TipsC from "components/tips";

export async function generateStaticParams() {
    const filesInProjects = fs.readdirSync('./content/tips');
    
    const paths = filesInProjects.map(file => {
      const filename = file.slice(0, file.indexOf('.'));
      return { slug: filename };
    });
  
    return paths;
  }
  
  export default function Tips({ params }: { params: { slug: string } }) {
    const fileContent = matter(fs.readFileSync(`./content/tips/${params.slug}.md`, 'utf8'));
    const frontmatter = fileContent.data;
    const markdown = fileContent.content;
    <main>
        <Hero headline={frontmatter.title} desc={frontmatter.desc} image={imagePath} fg={frontmatter.iconForeground} bg={frontmatter.iconBackground} bgImage={frontmatter.bgImage} />
        {/* <MainContent id={frontmatter.id} />
        <TipsC currentId={tip.id} noToShow={3} /> */}
        <Newsletter />
        <Footer />
    </main>
    // return (
    //   <div>
    //     <Head>
    //       <title>Demo Tips | {frontmatter.title}</title>
    //     </Head>
    //     <h1>{frontmatter.title}</h1>
    //     <span>{frontmatter.date}</span>
    //     <hr />
    //     <ReactMarkdown>
    //       {markdown}
    //     </ReactMarkdown>
    //   </div>
    // );
  }