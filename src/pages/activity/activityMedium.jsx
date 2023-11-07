import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import useMeasure from 'react-use-measure';

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const ActivityMedium = () => {
  const [posts, setPosts] = useState([]);
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  useEffect(() => {
    const fetchPosts = async () => {
      const rssUrl = 'https://medium.com/feed/de-butler';
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
        rssUrl
      )}&nocache=${new Date().getTime()}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'ok') {
          setPosts(
            data.items.map((item) => ({
              ...item,
              author: item.author, // rss2json이 반환하는 author 필드
            }))
          );
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);
  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((currentOffset) => currentOffset + CARD_SIZE);
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((currentOffset) => currentOffset - CARD_SIZE);
  };

  return (
    <section className="bg-neutral-950 py-8 pb-32" ref={ref}>
      <div className="relative overflow-hidden p-4 sm:pr-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="mb-4 text-5xl text-white font-bold">Research</h2>
            <div className="flex items-center gap-2">
              {/* 왼쪽 이동 버튼 */}
              <button
                onClick={shiftLeft}
                disabled={!CAN_SHIFT_LEFT}
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity duration-300 ${
                  CAN_SHIFT_LEFT
                    ? 'opacity-100'
                    : 'opacity-30 cursor-not-allowed'
                }`}
              >
                <FiArrowLeft />
              </button>
              {/* 오른쪽 이동 버튼 */}
              <button
                onClick={shiftRight}
                disabled={!CAN_SHIFT_RIGHT}
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity duration-300 ${
                  CAN_SHIFT_RIGHT
                    ? 'opacity-100'
                    : 'opacity-30 cursor-not-allowed'
                }`}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{ x: offset }}
            transition={{ ease: 'easeInOut' }}
            className="flex"
          >
            {posts.map((post) => (
              <Post key={post.guid} {...post} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ link, title, thumbnail, author }) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={thumbnail}
          className="mb-3 h-[200px] w-full rounded-lg object-cover"
          alt={`Cover image for ${title}`}
        />
      </a>
      <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-white ">
        {author}
      </span>
      <p className="mt-1.5 text-lg font-medium text-white ">{title}</p>
    </div>
  );
};

export default ActivityMedium;
