import Link from "next/link";

export default function Hero () {
    return ( 
    <section className="py-24 relative bg-cover bg-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=400")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> 
        <div className="relative z-10 text-center text-white py-20 px-6">
            <h1 className="text-4xl font-bold mb-4">WELCOME TO OUR BLOGS!</h1>
            <p className="text-lg mb-8">At <b>"THE BLOGS"</b>, Blogs are an excellent platform for sharing ideas, insights, and experiences with a wide audience. They allow individuals, businesses, and organizations to communicate in a more informal, yet informative manner. Whether it's through personal stories, industry updates, or educational content, blogs provide a way to connect with readers and establish authority in various fields. With the ability to include multimedia like images, videos, and links, blogs are versatile tools for engagement and knowledge sharing. Regular blogging not only helps to build an online presence but also fosters ongoing conversations and community interaction.</p>
        <Link href={"#Blogs"}>
            <button className="inline-block bg-yellow-500 text-black py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-600 transition duration-300">Explore Our Blogs!</button>
        </Link>
        </div>
    </section>
    )
}
