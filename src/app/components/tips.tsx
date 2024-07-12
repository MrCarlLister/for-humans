import TipsList from './tips/tipsList';
type TipsProps = {
    currentId?: number,
    noToShow?: number
};
export default function Tips({
    currentId = 0,
    noToShow = 99
}: TipsProps) {
    

    return (
            <section className=" bg-gray-50 pt-36 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-5xl sm:text-6xl text-black font-serif block mb-24 font-bold max-w-2xl">Check out these <span className="highlighter">pocket guides</span></h2>
                <TipsList currentId={currentId} noToShow={noToShow} />
            </div>
        </section>
    )
}
  