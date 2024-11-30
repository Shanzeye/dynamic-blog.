
'use client';

import { useParams } from 'next/navigation';
import CommentSection from '../../components/CommentSection';

interface Post {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [
  { id: 1, 
    title: 'Why Education Is Important?', 
    content: 'Education plays a vital role in shaping individuals and societies, providing the knowledge and skills necessary for personal and collective growth. It empowers people by broadening their understanding of the world, fostering critical thinking, and enabling them to make informed decisions. Education also promotes equality, as it opens doors to opportunities and helps break the cycle of poverty. It equips individuals with the tools to achieve their goals, contribute to the economy, and engage in meaningful social and civic activities. Furthermore, education encourages innovation, cultural exchange, and the development of sustainable solutions to global challenges. Ultimately, it is the foundation for building a brighter future for individuals and communities alike. Education is the cornerstone of personal development and societal progress. It not only imparts essential knowledge but also nurtures values such as discipline, responsibility, and perseverance. Through education, individuals learn how to navigate life’s challenges, pursue their passions, and contribute to their communities. It opens up avenues for career advancement and economic independence, lifting people out of poverty and providing them with the tools to improve their living standards. Beyond economic benefits, education fosters social cohesion by promoting understanding, tolerance, and respect for diversity. It also plays a key role in the advancement of technology, science, and innovation, driving the progress that shapes the modern world. As societies become more interconnected, education empowers individuals to adapt to changing global dynamics, from digital transformation to environmental sustainability. Moreover, education strengthens democracy by encouraging informed, active participation in societal matters. In short, education is not only about acquiring facts; it is about building the foundation for a healthier, more equitable, and prosperous world.' 
  },

  { id: 2, 
    title: 'How To Become A Successful.', 
    content: 'Becoming successful involves a combination of mindset, persistence, and continuous self-improvement. Success begins with setting clear, achievable goals and staying focused on them, even in the face of obstacles. It requires hard work, dedication, and a willingness to learn from both successes and failures. Building a strong foundation of discipline and time management helps maintain consistent progress toward your goals. Cultivating a positive mindset, embracing challenges, and being adaptable to change also play crucial roles. Success is not just about achieving material goals but also about personal growth, emotional resilience, and building meaningful relationships. By staying committed, being open to opportunities, and continuously evolving, anyone can pave their way to success.To become truly successful, it’s important to prioritize both personal and professional growth. Success is not achieved overnight; it requires persistence, patience, and a mindset that embraces both failure and learning as part of the journey. Developing a strong work ethic is essential—being proactive, consistently putting in effort, and going above and beyond in everything you do can set you apart. Success also depends on your ability to adapt and remain flexible in an ever-changing world. Networking and building relationships with like-minded individuals can open doors to new opportunities and provide valuable support along the way.' 
  },

  { id: 3, 
    title: 'World In 2025!', 
    content: 'The world in 2025 is likely to be shaped by significant technological advancements, environmental challenges, and evolving social dynamics. Technology will continue to drive change, with artificial intelligence, automation, and machine learning becoming more integrated into everyday life, transforming industries such as healthcare, transportation, and education. The rise of smart cities and the expansion of 5G networks will enhance connectivity and efficiency, enabling people to work and communicate in new ways. However, the rapid pace of technological change will also raise concerns about job displacement, data privacy, and ethical issues surrounding AI.Environmental sustainability will be a key focus as the impacts of climate change become more evident. Efforts to reduce carbon emissions, transition to renewable energy sources, and promote sustainable practices will intensify. In response to climate challenges, countries will need to collaborate more effectively on global solutions, with an emphasis on preserving biodiversity and managing resources responsibly.On the social front, the world in 2025 will see shifts in work culture, with remote work becoming more prevalent and flexible work arrangements becoming the norm. Demographic changes, such as aging populations in some countries and youth bulges in others, will influence global migration patterns and economic policies. At the same time, issues of inequality, healthcare access, and social justice will continue to be at the forefront, with movements for equity and inclusion pushing for systemic change in many regions.Overall, while the world in 2025 will be marked by innovation and progress, it will also face challenges that require collective action and a balance between technological advancement and social well-being.' 
  },

  { id: 4, 
    title: 'Identify The Sources Of Stress', 
    content: 'To effectively manage and reduce stress, it is important to take a holistic approach that addresses both the mind and body. The first step is to **identify the sources of stress**, whether they are work-related, personal, or external factors. Once you are aware of the triggers, you can **prioritize and manage tasks** by breaking them into smaller, more manageable steps, helping to avoid feelings of overwhelm. **Exercise** is another powerful tool for stress reduction, as physical activity releases endorphins, which improve mood and relieve tension. **Mindfulness practices** such as deep breathing, meditation, or yoga can help calm the mind, improve focus, and provide a sense of balance. Additionally, maintaining a healthy lifestyle by getting adequate sleep, eating nutritious foods, and staying hydrated supports the body’s ability to cope with stress. **Building strong support systems** with friends, family, or professional counselors can provide emotional relief and guidance when needed. Finally, it’s essential to **make time for relaxation and hobbies**, as engaging in activities that bring joy and fulfillment can offer a much-needed break from daily pressures. Through consistent effort in these areas, stress can be managed and reduced, leading to improved overall well-being.' 
  },

  { id: 5, 
    title: 'Artificial intelligence (AI) ', 
    content: 'Artificial intelligence (AI) refers to the simulation of human intelligence in machines designed to think, learn, and problem-solve like humans. AI systems are capable of analyzing data, recognizing patterns, and making decisions with minimal human intervention. The field of AI includes various subfields such as machine learning, natural language processing, and computer vision. Machine learning, in particular, allows computers to learn from experience and improve their performance over time. AI is transforming industries by automating tasks, enhancing efficiency, and driving innovations in areas like healthcare, finance, education, and transportation. For example, AI-powered tools can diagnose diseases, provide personalized recommendations, and even drive autonomous vehicles. While AI holds great potential, it also raises concerns about job displacement, privacy, and the ethical implications of decision-making by machines. As AI technology continues to evolve, its impact on society will be profound, offering both opportunities and challenges that require careful consideration and regulation.' 
  },

  { id: 6, 
    title: 'How To Manage Our Time?', 
    content: 'Managing time effectively is essential for achieving personal and professional goals. The first step is to set clear priorities by identifying what tasks are most important and aligning them with long-term objectives. Using a to-do list or a planner can help organize tasks and ensure nothing is forgotten. Its crucial to break larger tasks into smaller, more manageable steps, making them less overwhelming and easier to complete. Allocating specific time blocks for each task and sticking to those deadlines helps to maintain focus and avoid procrastination. Additionally, minimizing distractions, such as turning off notifications or finding a quiet workspace, can significantly improve productivity. Its also important to **take regular breaks to recharge and avoid burnout, as working without rest can lead to decreased efficiency. Saying no to non-essential commitments helps protect your time for the things that matter most. Finally, reflecting at the end of the day on what was accomplished and adjusting plans for the next day helps maintain continuous progress and improves future time management strategies. By being mindful and intentional with our time, we can make more of each day and achieve a balanced and productive life.' 
  },
];

const PostPage = () => {
  const { id } = useParams();

  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return <p className="text-center text-xl text-red-500 mt-6">Post not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-amber-300 shadow-lg rounded-lg mt-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">{post.content}</p>

      <hr className="my-6 border-t-2 border-gray-300" />

      <CommentSection postId={post.id} />
    </div>
  );
};

export default PostPage;
