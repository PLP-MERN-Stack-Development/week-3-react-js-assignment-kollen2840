import {useState} from 'react';
import FeedbackList from '@/components/FeedBackList';
import FeedbackForm from '@/components/FeedbaclForm';

export default function App(){
  const [feedbacks,setFeedbacks] = useState([]);
  
  
  const addFeedback = (feedback) =>{
    setFeedbacks(prev=> [feedback, ...prev])
  };
  
  const deleteFeedback = (index) => {
    setFeedbacks(prev => prev.filter((_,i) => i !== index))
  };
  
  
  return(
    <div className="max-w-2xl p-2 mx-auto">
      <h1 className="text-2xl font-bold">
        Students FeedBack Tracker
      </h1>
      
      <FeedbackForm addOn={addFeedback}/>
      
      <FeedbackList 
      feedbacks={feedbacks}
      onDelete={deleteFeedback}
      />
      
    </div>
    )
}
  