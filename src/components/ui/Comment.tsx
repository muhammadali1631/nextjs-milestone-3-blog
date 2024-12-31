'use client'
import { RxAvatar } from "react-icons/rx";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

interface CommentType {
  name: string;
  comment: string;
  post: string;
}

export default function CommentForm({ postId }: { postId: string }) {
  const [data, setData] = useState<CommentType[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [refetch, setReFetch] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response: CommentType[] = await client.fetch(`*[_type == "comment" && post == $postId] | order(_createdAt desc) `, { postId });
      setData(response);
    };
    
    fetchData();
  }, [refetch]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await client.create({
      _type: "comment",
      name,
      post: postId,
      comment,
    });

    // Clear the input fields after submission
    setName('');
    setComment('');
    setReFetch(refetch + 1); // Refetch comments
  };

  return (
    <div className="flex items-center flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[90vw] md:w-[700px]">
        <input
          type="text"
          name="name"
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
          className="w-full border-2 text-xl p-2 rounded outline-none"
        />
        <textarea
          name="comment"
          value={comment} 
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment"
          required
          className="w-full border-2 text-xl p-2 rounded outline-none h-32"
        ></textarea>
        <button type="submit" className="bg-black text-white rounded p-2 text-xl dark:bg-white dark:text-black">
          Submit
        </button>
      </form>
      
      <div>
      {data.map((item, index) => (
          <div key={index} className="w-[90vw] md:w-[700px] border-2 my-4 p-2 rounded space-y-2">
            <div className="flex items-center gap-3">
              <RxAvatar className="h-10 w-10" />
              <p className="font-bold">{item.name}</p>
            </div>
            <p>{item.comment}</p>
          </div>
        ))}
        <div className="w-[90vw] md:w-[700px] border-2 my-4 p-2 rounded space-y-2">
          <div className="flex items-center gap-3">
            <RxAvatar className="h-10 w-10" />
            <p className="font-bold">Name</p>
          </div>
          <p>This comment is just for UI. This is not an actual comment but you can do a comment.</p>
        </div>
        
      </div>
    </div>
  );
}
