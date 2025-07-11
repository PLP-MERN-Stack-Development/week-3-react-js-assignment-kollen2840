import {Card} from '@/components/ui/card';
import {Button} from '@/components/ui/card';


export default function FeedbackItem({feedback, index, onDelete}){
  
  return(
    <Card>
      <div className="block">
       <p className="w-[100%] p-2 text-semibold text-sm">{feedback.name}</p>
       <p className="w-[100%] p-2 text-sm ">{feedback.comment}</p>
       <p claasName="text-semibold text-blue-600 w-[100%]">Rating : {feedback.rating}</p>
       <Button variant="destructive" className="p-2 rounded-lg text-bold bg-red-700 text-white text-sm" onClick={()=> onDelete(index)}>Delete</Button>
       </div>
      
    </Card>
    )
  
}