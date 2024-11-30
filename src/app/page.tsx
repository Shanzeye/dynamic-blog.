
'use client';
import Link from 'next/link';
import Hero from './components/hero';
import Users from './components/users';
import Feature from './components/feature';

interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl: string; // URL for the image
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Why Education Is Important?',
    content: 'Education plays a vital role in shaping individuals and societies, providing the knowledge and skills necessary for personal and collective growth.',
    imageUrl: '/images/edu.jpg',
  },
  {
    id: 2,
    title: 'How To Become A Successful.',
    content: 'Becoming successful involves a combination of mindset, persistence, and continuous self-improvement. Success begins with setting clear, achievable goals.',
    imageUrl: '/images/suc.jpg', 
  },
  {
    id: 3,
    title: 'World In 2025!',
    content: 'The world in 2025 is likely to be shaped by significant technological advancements, environmental challenges, and evolving social dynamics.',
    imageUrl: '/images/world.jpg', 
  },

  {
    id: 4,
    title: 'Identify The Sources Of Stress',
    content: 'To effectively manage and reduce stress, it is important to take a holistic approach that addresses both the mind and body. The first step is to identify the sources of stress',
    imageUrl: '/images/stress.jpg', 
  },


  
  {
    id: 5,
    title: 'Artificial intelligence (AI) ',
    content: 'Artificial intelligence (AI) refers to the simulation of human intelligence in machines designed to think, learn, and problem-solve like humans.',
    imageUrl: '/images/ai.jpg', 
  },

  {
    id: 6,
    title: 'How To Manage Our Time?',
    content: 'Managing time effectively is essential for achieving personal and professional goals. The first step is to set clear priorities.',
    imageUrl: '/images/time.jpg',
  },
];

const HomePage = () => {
  return (
    <div className="bg-amber-100 min-h-screen">
      <Hero />

      <Feature />

      <div id="Blogs" className="max-w-7xl mx-auto p-6 bg-amber-300 shadow-lg rounded-lg mt-8">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">TOP BLOGS</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full md:w-48 h-full object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <Link
                  href={`/posts/${post.id}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Users />
    </div>
    
  );
};

export default HomePage;
