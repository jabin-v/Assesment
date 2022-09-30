
import { useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import QuestionsCard from "../../components/QuestionsCard/QuestionsCard";
import Searchbar from "../../components/Searchbar/Searchbar"
import { useGetQuestionsQuery } from "../../redux/services/stackOverflowapi"
import "./questions.css"
const Questions = () => {
  const { sort } = useSelector((state) => state.questions);

  

  const {data,isFetching,error}=useGetQuestionsQuery(sort || "activity");




  return (
    <div className="questions_container">
    <Searchbar/>
    <p className="questions_title">Questions</p>
    <Filter/>
    {
      data?.items?.map((question)=><QuestionsCard question={question} key={question.question_id}/>)
    }
    

    </div>
  
  )
}

export default Questions