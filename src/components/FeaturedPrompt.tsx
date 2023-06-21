import React from 'react'

const FeaturedPrompt = () => {
  return (
    <div>FeaturedPrompt</div>
  )
}

export default FeaturedPrompt







// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { featuredData } from "../mock/data";
// import React from "react";
// import CarouselCard from "./CarouselCard";
// import Heading from "./Heading";


// const FeaturedPrompt = () => {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 4,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   return (
//     <>
//       <div className="pl-12">
//         <Heading title="Featured Prompts" />
//         <Carousel
//           partialVisible
//           customTransition="all 1s linear"
//           transitionDuration={1000}
//           slidesToSlide={4}
//           infinite
//           responsive={responsive}
//         >
//           {featuredData.map((item, index) => {
//             return (
//               <div className="" key={index}>
//                 <CarouselCard item={item} />
//               </div>
//             );
//           })}
//         </Carousel>
//       </div>
//     </>
//   );
// };

// export default FeaturedPrompt;
