import styles from './UserInformation.module.css'

function UserInformation({user, avatarImg, timeframe, changeTimeframe}) {  
  const avatarImgURL = new URL(`./assets/${avatarImg}`,import.meta.url).href;
  
  return(
    <>
      <section className={styles.container}>
        <div className={styles.container_top}>
          <img className={styles.userimg} src={avatarImgURL} alt={'Picture of '+user} />
          <div className={styles.container_usernameSection}>
            <p>Report for</p>
            <h2 className={styles.username}>{user}</h2>
          </div>
        </div>        
        <ul className={styles.timeframe}>
            <li key="1" className={timeframe=='daily' ? styles.timeframeActive : ''} onClick={ (e) => changeTimeframe(e,'daily')}>daily</li>
            <li key="2" className={timeframe=='weekly' ? styles.timeframeActive : ''} onClick={ (e) => changeTimeframe(e,'weekly')}>weekly</li>
            <li key="3" className={timeframe=='monthly' ? styles.timeframeActive : ''} onClick={ (e) => changeTimeframe(e,'monthly')}>monthly</li>
        </ul>  
      </section>
    </>
  )
}

export default UserInformation;