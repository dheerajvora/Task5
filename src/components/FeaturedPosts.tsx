import React from 'react';
import { GoChevronRight } from "react-icons/go";

interface FeaturedPost {
  id: number;
  image: string;
  categories: string[];
  title: string;
  description: string;
  date: string;
  commentsCount: number;
}

const featuredPosts: FeaturedPost[] = [
  {
    id: 1,
    image: '/images/post/post1.png',
    categories: ['Google', 'Trending', 'New'],
    title: "Loudest a la Madison #1 (L'integral)",
    description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
    date: '22 April 2021',
    commentsCount: 10,
  },
  {
    id: 2,
    image: '/images/post/post2.png',
    categories: ['Google', 'Trending', 'New'],
    title: "Loudest a la Madison #1 (L'integral)",
    description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
    date: '22 April 2021',
    commentsCount: 10,
  },
  {
    id: 3,
    image: '/images/post/post3.png',
    categories: ['Google', 'Trending', 'New'],
    title: "Loudest a la Madison #1 (L'integral)",
    description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
    date: '22 April 2021',
    commentsCount: 10,
  },
];

const FeaturedPosts: React.FC = () => {
  return (
    <section className="py-25 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="title-subtitle font-medium mb-2 ">Practice Advice</h3>
        <h2 className="title text-dark-blue mb-4">Featured Posts</h2>
        <p className="title-para max-w-2xl mx-auto">
          Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded">
                  NEW
                </span>
              </div>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex gap-3 mb-4">
                {post.categories.map((category, index) => (
                  <span
                    key={index}
                    className={`category-text ${index === 0 ? 'text-primary' : ''}`}
                  >
                    {category}
                  </span>
                ))}
              </div>

              <h3 className="text-xl  text-gray-900 mb-3 hover:text-blue-500 cursor-pointer">
                {post.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {post.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between text-gray-400 text-sm">
                <div className="flex items-center">
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src="/images/icon/comments.svg" alt="comment" />
                  <span>{post.commentsCount} comments</span>
                </div>
              </div>

              {/* Learn More Button */}
              <button className="mt-4 text-gray font-bold flex items-center">
                Learn More
                <GoChevronRight className='text-primary' size={20}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
