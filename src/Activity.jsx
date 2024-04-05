import styles from './Activity.module.css'
import iconEllipsis from './assets/icon-ellipsis.svg'

function Activity({title,current,previous,timeframe}) {
  const titleClass = title.replace(" ","");
  const previousHoursName = {'daily':'Yesterday', 'weekly':'Last week', 'monthly':'Last month'}[timeframe];
  const currentHoursSuffix = (current == 1) ? 'hr' : 'hrs';
  const previousHoursSuffix = (previous == 1) ? 'hr' : 'hrs';

  return(
    <>
      <section className={`${styles.allContainer} ${styles.allBkg} ${styles["bkg_"+titleClass]}`} >        
        <div className={styles.bottomContainer}>
          <div className={styles.nameContainer}>
            <h2 className={styles.activityName}>{title}</h2>
            <div className={styles.imgDots} />
          </div>
          <div className={styles.hoursContainer}>
            <h3 className={styles.currentHours}>{current}{currentHoursSuffix}</h3>
            <p className={styles.previousHours}>{previousHoursName} - {previous}{previousHoursSuffix}</p>
          </div>
        </div>        
      </section>
    </>
  )
}

export default Activity;