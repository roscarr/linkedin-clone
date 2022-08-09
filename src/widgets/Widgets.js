import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
  const newsArticle =(heading,subtitle)=>(
    <div className="widgets__article">
      <div className="widgets__articleLeft">
           <FiberManualRecordIcon/>
      </div>
      <div className="widgets__articleRight">
           <h4>{heading}</h4>
           <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon/>
      </div>
      {newsArticle("papa react is back","new")}
      {newsArticle("read our top ten right now","course")}
      {newsArticle("how get to many girfrien","tutorial")}
      {newsArticle("read our top ten right now","findout, knowlest")}
      {newsArticle("top ten","read our top ten right now")}
       
    </div>
  )
}

export default Widgets
