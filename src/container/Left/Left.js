
import "./left.css"
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { Link } from "react-router-dom";

const sidebarTage=[
    {
        key:"1",
        icon:"",
        tage:""
    },
]
const Left = () => {

  return (
    <div className="left">
        <div className="sidebar">
            <div className="logo">
                <img src="https://miro.medium.com/max/1200/0*UEtwA2ask7vQYW06.png"/>
            </div>
            <div className="options">
                <ul className="options-list">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li>
                  <QuestionMarkOutlinedIcon className="icon" style={{ fontSize: 15 }}/>
                   <span>Questions</span>
                  </li>
                 </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li>
                  <WorkOutlineOutlinedIcon className="icon" style={{ fontSize: 15 }}/>
                   <span>Jobs</span>
                  </li>
                 </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li>
                  <TextSnippetOutlinedIcon className="icon" />
                   <span>Documents</span>
                  </li>
                 </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li>
                  <SellOutlinedIcon className="icon" />
                   <span>Tags</span>
                  </li>
                 </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li>
                  <PermIdentityOutlinedIcon className="icon" />
                   <span>Users</span>
                  </li>
                 </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li>
                  <LabelImportantOutlinedIcon className="icon" />
                   <span>Badge</span>
                  </li>
                 </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li>
                  <CampaignOutlinedIcon className="icon" />
                   <span>Ask Question</span>
                  </li>
                 </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li>
                  <ReorderOutlinedIcon className="icon" />
                   <span>Stack exchange</span>
                  </li>
                 </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li>
                  <MailOutlinedIcon className="icon" />
                   <span>Inbox</span>
                  </li>
                 </Link>

                </ul>
                
            </div>

        </div>
        
    </div>
  )
}

export default Left