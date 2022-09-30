import QuestionTag from "../QuestionTag/QuestionTag"
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import "./questionsCard.css"
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
const QuestionsCard = ({question}) => {

  return (
    <div className="questions_card">
        <div className="questions_card-right">
         <p className="questions_card-right-question">{question.title}</p>
         <div style={{marginBottom:"15px"}}>
          {
            question?.tags?.map((tag)=><QuestionTag tag={tag} key={tag}/>)
          }  
        
         </div>
         <div className="questions_card__answerinfo">

            {
                question?.is_answered ? 
                <>
                 <TextSnippetOutlinedIcon style={{ fontSize: 15, color:"#F78404" }}/>         
                <p>answered 1 min ago <span className="answername" >{question.owner.display_name
}</span> 146</p>
                </>:
                <>
                <ModeEditOutlineOutlinedIcon style={{ fontSize: 15, color:"#F78404" }}/>         
                <p>modified 1 min ago <span className="answername" >{question.owner.display_name}</span> {question?.owner.reputation
}</p>
                </>
               
            }
            
            

            
            

         </div>

      

        </div>
        <div className="questions_card-left">
            <div className="questions_card-left--info">
                <p>{question.score}</p>
                <p>votes</p>
                <ThumbUpOffAltOutlinedIcon/>
            </div>
            <div className="questions_card-left--info">
                <p>{question.answer_count}</p>
                <p>answers</p>
                <ChatBubbleOutlineOutlinedIcon/>
            </div>
            <div className="questions_card-left--info">
                <p>{question.view_count}</p>
                <p>views</p>
                <VisibilityOutlinedIcon/>
            </div>

        </div>
        
    </div>
  )
}

export default QuestionsCard