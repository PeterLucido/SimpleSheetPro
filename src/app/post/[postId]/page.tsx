'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Define a type for the fetched data
interface PostData {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdById: string;
  // Add other properties if needed
}

function PostDetail() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const postIdIndex = segments.findIndex(s => s === 'post') + 1;
  const postId = segments[postIdIndex];
  console.log("postId:", postId)
  
  const [post, setPost] = useState<PostData | null>(null);
  
  useEffect(() => {
    console.log("postId:", postId); // Log postId before fetching
  
    const fetchPost = async () => {
      try {
        const fetchUrl = `/api/post?id=${postId}`;
        console.log("Fetching Post:", postId);
        console.log("Fetch URL:", fetchUrl);
  
        const response = await fetch(fetchUrl);
  
        if (response.ok) {
          console.log("Response OK");
          const postData = await response.json() as PostData | undefined;
  
          if (postData) {
            console.log("Response Data:", postData);
            setPost(postData); // Log before and after setting post state
          } else {
            console.error("Invalid data structure in response");
          }
        } else {
          console.error("Error fetching post:", response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    void fetchPost();
  
    console.log("After calling fetchPost, post is:", post); // Log after fetchPost is called
  }, [post, postId]);
  
  
  console.log(888888, post);
  console.log("Post State:", post);

  if (post === null) { // Change this condition to explicitly check for null
    console.log("post is null");
    return <div>Loading...</div>;
  }

  console.log("Rendering Post Detail");

  return (
    <div>
      <h1>Post Name: {post.name}</h1>
    </div>
  );
}

export default PostDetail;
