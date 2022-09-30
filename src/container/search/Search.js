import { useParams } from "react-router-dom";
import QuestionsCard from "../../components/QuestionsCard/QuestionsCard";
import { useGetQuestionsBySeacrhQuery } from "../../redux/services/stackOverflowapi";
import"./search.css"

const Search = () => {
    const { searchTerm } = useParams();
    const { data, isFetching, error } = useGetQuestionsBySeacrhQuery(searchTerm);
  return (
    <>
    {isFetching ? "Please wait data is loading":
      data?.items?.map((question)=><QuestionsCard question={question} key={question.question_id}/>)
    }
    </>
  )
}

export default Search