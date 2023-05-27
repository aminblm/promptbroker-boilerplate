"use client"



const Blog = () => {

  const myBlog = [
    {
      date: "May 11th, 2023",
      title: "Prompt Bundles",
      image: "../blog_Images/prompt_bundles.jpeg"
    },
    {
      date: "April 12th, 2023",
      title: "Watermark Editor",
      image: "../blog_Images/watermark_editor.jpeg"
    },
    {
      date: "March 16th, 2023",
      title: "Midjourney VS Prompts & Promptbroker",
      image: "../blog_Images/Midjourney.jpeg"
    },
    {
      date: "March 15, 2023",
      title: "GPT-4 Prompts & Promptbroker",
      image: "../blog_Images/GPT-4.jpeg"
    },
  ]

  return (
    <div className="blog w-[750px] ml-[315px]">
      <h1 className="my-12 text-5xl font-bold">Blog </h1>
      <div className="blogcards inline-grid grid-rows-2 grid-cols-2 gap-4">
        {myBlog.map((blog, index) => (
          <div className="blog-card" key={index}>
              <span className="blog-card-date">{blog.date}</span>
              <img src={blog.image} alt={blog.title} width={300} height={120} className="rounded-t-md"/>
              <p className="blog-card-title">{blog.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog;