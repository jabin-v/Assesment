import "./jobcard.css"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SettingsRemoteOutlinedIcon from '@mui/icons-material/SettingsRemoteOutlined';

const JobCard = () => {
  return (
    <div className="job_card">
    <p className="job_name">Front End Developer with Angular</p>
    <p className="job_compay">Wallet Hub</p>
    <div className="job_card-location">
        <LocationOnOutlinedIcon/>
        <p>Washington,DC</p>
        <SettingsRemoteOutlinedIcon/>
        <p>Remote</p>
    </div>
    <div className="job_card-skills">
        <span className="job_card-skill">Angular js</span>
        <span className="job_card-skill">Java script</span>
        <span className="job_card-skill">Cordova</span>
        

    </div>
    </div>
  )
}

export default JobCard