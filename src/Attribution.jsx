import styles from './Attribution.module.css';

function Attribution() {
  return (
    <div className={styles.attribution}>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      <div className={styles.break} />
      &nbsp;Coded by <a href="https://github.com/rokandic" target="_blank">Rok Andic</a>.
    </div>
  )
}

export default Attribution;