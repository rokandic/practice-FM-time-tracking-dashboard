import { useState } from 'react';
import UserInformation from './UserInformation.jsx';
import Activity from './Activity.jsx';
import styles from './User.module.css'

function User({userData}) {
  const {user, activities, avatar} = userData;
  const [timeframe, setTimeframe] = useState("weekly");
  let   activitiesComp = [];

  function changeTimeframe(event, toTimeframe) {
    setTimeframe(toTimeframe);    
  }

  for( let i=0; i<activities.length; i++) {  
    const activity = activities[i];   
    const title = activity["title"]; 
    const current = activity["timeframes"][timeframe]["current"];
    const previous = activity["timeframes"][timeframe]["previous"];
    
    activitiesComp.push(      
      <Activity key={i} title={title} current={current} previous={previous} timeframe={timeframe} />
    )
  }

  return (
    <>
    <main className={styles.user}>
      <UserInformation user={user} avatarImg={avatar} timeframe={timeframe} changeTimeframe={changeTimeframe} />      
      {activitiesComp}
    </main>
    </>
  )
}

export default User;