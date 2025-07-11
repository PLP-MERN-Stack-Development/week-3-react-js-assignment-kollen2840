import { useState } from 'react';

import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';



export default function FeedbackForm({ addOn }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    // Correctly call trim() on strings
    if (!name.trim() || !comment.trim() || !rating.trim()) return;

    // Call the prop function with correct casing
    addOn({ name, comment, rating });

    // Reset form fields
    setName("");
    setComment("");
    setRating("");
  };

  return (
    <form onSubmit={handleAdd} className="bg-gray-100 rounded-lg shadow m-2 p-2">
      <Input
        className="p-2 outline-none border-none rounded-lg text-sm w-[100%] mb-2"
        placeholder="Student's Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Textarea
        className="p-2 outline-none border-none rounded-lg text-sm w-[100%] bg-white rounded-lg mb-2"
        placeholder="Feedbacks or comments"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />

      <Input
        className="p-2 outline-none border-none rounded-lg text-sm w-[100%] mb-2"
        placeholder="Rating (1-5)"
        value={rating}
        type="number"
        onChange={e => setRating(e.target.value)}
      />

      <Button
        type="submit"
        className="bg-black text-white py-2 px-3 rounded-lg text-sm font-bold"
      >
        Add Feedback
      </Button>
    </form>
  );
}
