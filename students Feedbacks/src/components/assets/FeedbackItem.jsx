export default function FeedbackItem({ feedback, index, onDelete }){
  
  return(
    <div className="rounded-lg p-4 flex justify-between">
      <p className="text-semibold text-sm ">{feedback.name}</p>
       <p className="text-sm">{feedback.comment}</p>
       <p claasName="text-semibold text-blue-600">Rating : {feedback.rating}</p>
       <button className="p-2 rounded-lg text-bold bg-red-700 text-white text-sm" onClick={()=> onDelete(index)}>Delete</button>

    </div>
    )
  
}