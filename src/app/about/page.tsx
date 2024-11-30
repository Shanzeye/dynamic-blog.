export default function About () {
    return (
        <div>
        <section className="py-24 relative h-dvh">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Our mission is simple: to inspire, educate, and inform our readers through high-quality, thought-provoking content.</h2>
                        <p className="text-gray-500 text-xl font-normal leading-relaxed lg:text-start text-center">Our team of passionate writers, experts, and creators work tirelessly to bring you the best in areas such as technology, lifestyle, education, personal growth, health, and much more. We are constantly exploring new ideas, tools, and resources to make sure we stay relevant and up-to-date with the fast-paced world we live in.We are committed to creating a welcoming and engaging community where ideas can be shared freely. Whether you're a curious learner or a seasoned expert, we invite you to explore our blog, share your thoughts, and join the conversation.</p>
                    </div>
                    
                </div>
                <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="https://images.pexels.com/photos/159618/still-life-school-retro-ink-159618.jpeg?auto=compress&cs=tinysrgb&w=400" alt="about" />
            </div>
        </div>
    </section>
                                            
        </div>
    )
}