import React from 'react';
import styles from './styles/cssModule.module.css';

// CSS Module
// - 클래스명 중복 방지
export default function CssModuleComponents() {
  console.log(styles); // {}
  /* {container: 'cssModule_container__unGt9', 
      box: 'cssModule_box__bYG2i', 
      red: 'cssModule_red__ZvcS6', 
      orange: 'cssModule_orange__pJuAj', 
      yellow: 'cssModule_yellow__HsDaM'
  */

  return (
    <div className={styles.container}>
      <div className={[styles.box, styles.red].join(' ')}></div>
      {/* 띄어쓰기 해야, 따로따로 클래스명 먹음 */}
      <div className={[styles.box, styles.orange].join(' ')}></div>
      <div className={`${styles.box} ${styles.yellow}`}></div>
    </div>
  );
}
