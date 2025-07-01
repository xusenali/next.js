

export const metadata = {
    title: 'About',
    description: 'salom'
}

export const revalidate = false

export default function AboutPage() {
    return (
        <main className="min-h-screen  text-white px-6 py-12">
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-6">Biz haqimizda</h1>
                <p className="max-w-2xl mx-auto text-lg leading-7 text-gray-300">
                    Biz zamonaviy web ilovalarni ishlab chiqishga ixtisoslashgan yosh va tajribali dasturchilar jamoasimiz.
                    Asosiy maqsadimiz — sizning g‘oyangizni kuchli va tezkor IT yechimga aylantirish.
                </p>
                <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                    alt="Jamoamiz"
                    className="mt-8 mx-auto max-w-xl rounded-lg shadow-lg"
                />
            </section>

            <section className="text-center">
                <h2 className="text-3xl font-semibold mb-10">Bizning jamoa</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="bg-gray-800 rounded-xl p-6 w-64 shadow-md">
                        <h3 className="text-xl font-bold">Ali Karimov</h3>
                        <p className="text-gray-400">Frontend Developer</p>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6 w-64 shadow-md">
                        <h3 className="text-xl font-bold">Malika Toshpulatova</h3>
                        <p className="text-gray-400">UI/UX Designer</p>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6 w-64 shadow-md">
                        <h3 className="text-xl font-bold">Javohir Bek</h3>
                        <p className="text-gray-400">Backend Developer</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
