import TipsList from './tips/tipsList';

export default function Tips() {

    return (
            <section className=" bg-gray-50 py-36">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-7xl text-black font-serif block mb-24 font-bold max-w-2xl">User experience and web design tips</h2>
                <TipsList />
            </div>
        </section>
    )
}
  