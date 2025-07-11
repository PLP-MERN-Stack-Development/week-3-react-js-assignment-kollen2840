import FeedbackItem from '@/components/assets/FeedbackItem';

export default function FeedbackList({ feedbacks, onDelete }){
  
   if(feedbacks.length === 0){
     return <p className="text-gray-500 font-sm">No Feedbacks yet to be recorded</p>
   }
  
   
return(
     <div className="">
       {feedbacks.map((f,i)=>(
       <FeedbackItem 
         key={i}
         index={i}
         feedback={f}
         onDelete={onDelete}
       />
       ))}
     </div>
     )
}