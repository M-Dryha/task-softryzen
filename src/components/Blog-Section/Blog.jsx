import s from './Blog.module.css';
import Blog from '../../assets/home/blog.jpg';
import Blog2x from '../../assets/home/blog@2x.jpg';
import BlogWebp from '../../assets/home/blog.webp';
import BlogWebp2x from '../../assets/home/blog@2x.webp';

const BlogSection = () => {
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <img
          src={`${Blog} 1x, ${Blog2x} 2x`}
          srcSet={`${BlogWebp} 1x, ${BlogWebp2x} 2x`}
          alt="Blog"
          className={s.blogImage}
        />
      </div>
      <div className={s.container}>
        <p className={s.blogString}>April 16 2020</p>
        <h2 className={s.blogHeader}>Blog Post One</h2>
        <p className={s.blogText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button type="button" className={s.button}>
          Read Our Blog
        </button>
      </div>
    </section>
  );
};
export default BlogSection;
