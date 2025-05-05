import React, { useState } from "react";
import styles from "./BlogPost.module.css";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/111.jpg";
import image6 from "../images/222.jpg";
import image7 from "../images/333.jpg";
import image8 from "../images/p1.jpg";
import image9 from "../images/p2.jpg";
import image10 from "../images/p3.jpg";
import image11 from "../images/p4.jpg";
import image12 from "../images/p5.jpg";
import image13 from "../images/p6.jpg";
import image14 from "../images/q.jpg";
import image15 from "../images/w.jpg";
import image16 from "../images/e.jpg";
import image17 from "../images/r.jpg";
import image18 from "../images/z.jpg";
import image19 from "../images/x.jpg";
import image20 from "../images/c.jpg";
import image21 from "../images/v.jpg";
import image22 from "../images/v1.jpg";
import image23 from "../images/v2.jpg";
import image24 from "../images/v3.jpg";
import image25 from "../images/v4.jpg";
import image26 from "../images/v5.jpg";
import image27 from "../images/e1.jpg";
import image28 from "../images/e2.jpg";
import image29 from "../images/e3.jpg";




export const BlogPost = () => {
  const [modalImage, setModalImage] = useState(null);
  const [currentPost, setCurrentPost] = useState(0);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const nextPost = () => {
    setCurrentPost((prev) => (prev + 1) % blogPosts.length);
  };

  const prevPost = () => {
    setCurrentPost((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const blogPosts = [
    {
      title: "Inspection and Security Debriefing for Holy Week 2023",
      description: "I'm Al-Yashier Amora, an aspiring IT professional passionate about computer hardware servicing. I enjoy maintaining and optimizing computer systems to ensure peak performance.",
      images: [
        { src: image1},
        { src: image2},
        { src: image3},
        { src: image4}
      ]
    },
    {
        title: "Cleanup Drive at Barangay Lunzuran 2023",
        description: "I'm Al-Yashier Amora, an aspiring IT professional passionate about computer hardware servicing. I enjoy maintaining and optimizing computer systems to ensure peak performance.",
        images: [
          { src: image5},
          { src: image6},
          { src: image7}
        ]
      },
      {
        title: "International Coastal Clean-Up Day 2023",
        description: "I'm Al-Yashier Amora, an aspiring IT professional passionate about computer hardware servicing. I enjoy maintaining and optimizing computer systems to ensure peak performance.",
        images: [
          { src: image8},
          { src: image9},
          { src: image10},
          { src: image11},
          { src: image12},
          { src: image13}
        ]
      },
      {
        title: "National Telecommunication Comission Sport Fest 2023",
        description: "I'm Al-Yashier Amora, an aspiring IT professional passionate about computer hardware servicing. I enjoy maintaining and optimizing computer systems to ensure peak performance.",
        images: [
          { src: image14},
          { src: image15},
          { src: image16},
          { src: image17}
        ]
      },
      {
        title: "Outreach Program at Bihing Tahik Elementary School (July 8 2023) ",
        description: "I'm Al-Yashier Amora, an aspiring IT professional passionate about computer hardware servicing. I enjoy maintaining and optimizing computer systems to ensure peak performance.",
        images: [
          { src: image18},
          { src: image19},
          { src: image20},
          { src: image21}
        ]
      },
      {
        title: "Regatta de Zamboanga 2023",
        description: "I'm Al-Yashier Amora, an aspiring IT professional passionate about computer hardware servicing. I enjoy maintaining and optimizing computer systems to ensure peak performance.",
        images: [
          { src: image22},
          { src: image23},
          { src: image24},
          { src: image25},
          { src: image26}
        ]
      },
      {
        title: "Barangay and SK Election 2023",
        description: "I'm Al-Yashier Amora, an aspiring IT professional passionate about computer hardware servicing. I enjoy maintaining and optimizing computer systems to ensure peak performance.",
        images: [
          { src: image27},
          { src: image28},
          { src: image29}
        ]
      }
      
    
  ];

  const currentPostData = blogPosts[currentPost];

  return (
    <section id="blogPost" className={styles.container}>
      <div className={styles.content}>
        {/* Blog Post Content */}
        <h2 className={styles.title}>{currentPostData.title}</h2>
        <p className={styles.description}>{currentPostData.description}</p>

        {/* Images */}
        {currentPostData.images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img
              src={image.src}
              alt=""
              className={styles.postImage}
              onClick={() => openModal(image.src)}
            />
            <div className={styles.caption}>{image.caption}</div>
          </div>
        ))}

        {/* Navigation controls at bottom */}
        <div className={styles.navigationBottom}>
          <button onClick={prevPost} className={styles.navButton}>Previous Post</button>
          <button onClick={nextPost} className={styles.navButton}>Next Post</button>
        </div>

        {/* Post indicator */}
        <div className={styles.postIndicator}>
          {blogPosts.map((_, index) => (
            <span 
              key={index} 
              className={`${styles.dot} ${index === currentPost ? styles.activeDot : ''}`}
              onClick={() => setCurrentPost(index)}
            />
          ))}
        </div>
      </div>

      {/* Modal for image viewing */}
      {modalImage && (
        <div className={styles.modal} onClick={closeModal}>
          <img src={modalImage} alt="" />
        </div>
      )}
    </section>
  );
};