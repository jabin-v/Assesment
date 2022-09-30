import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectSort } from "../../redux/features/questionsSlice";
import "./filter.css"

const filters=[
    {
        key:"1",
        sort:"activity"
    },
    {
        key:"2",
        sort:"month"
    },
    {
        key:"3",
        sort:"votes"
    },
    {
        key:"4",
        sort:"hot"
    },
    {
        key:"5",
        sort:"week"
    },
    {
        key:"6",
        sort:"creation"
    },
]

const Filter = () => {

    const { sort } = useSelector((state) => state.questions);

    const dispatch=useDispatch();

    const [isActive,setIsActive]=useState(false)

    const handleFilterClick=(e)=>{

        console.log(e.target.value)
        dispatch(selectSort(e.target.value))
    }


  return (
    <div className="filter">
        {
            filters.map((filter)=>
            <button
            key={filter.key}
             value={filter.sort} 
             className={`filter_button ${sort === filter.sort ? "active":""}`}
             onClick={handleFilterClick}
             >{filter.sort}</button>
            )
        }
       

    </div>
  )
}

export default Filter