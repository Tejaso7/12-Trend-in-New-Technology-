// Add animation to topics on page load
document.addEventListener("DOMContentLoaded", function() {
    const topics = document.querySelectorAll(".topic");
    
    topics.forEach((topic, index) => {
      setTimeout(() => {
        topic.style.opacity = "1";
        topic.style.transform = "translateY(0)";
      }, index * 200);
    });
  });
  
  // Add hover effect to topics
  const topics = document.querySelectorAll(".topic");
  
  topics.forEach(topic => {
    topic.addEventListener("mouseenter", function() {
      this.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
    });
  
    topic.addEventListener("mouseleave", function() {
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
  });
  // Add animation to images on page load
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".topic img");
    
    images.forEach((image, index) => {
      setTimeout(() => {
        image.style.opacity = "1";
        image.style.transform = "translateY(0)";
      }, index * 200);
    });
  });
  