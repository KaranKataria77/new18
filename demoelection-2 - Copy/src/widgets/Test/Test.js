import React from "react";
import styles from './Test.module.css';
import Menu from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';
import LiveTV from '@material-ui/icons/LiveTv'

function Test() {
  return (
    <div className={styles.test_container}>
      <div className={styles.test_row_1}>
        <Menu className={styles.test_menu} />
        <p className={styles.test_cat}>News 18 Home</p>
        <p className={styles.test_cat}>Elections</p>
        <p className={styles.test_cat}>All Lok Sabha</p>
        <p className={styles.test_cat}>All Assembly</p>
        <p className={styles.test_cat}>Analytics Center</p>
        <p className={styles.test_cat}>Infographics</p>
        <p className={styles.test_cat}>Trivia</p>
        <p className={styles.test_cat}>Cartoons</p>
        <p className={styles.test_cat}>Interactives</p>
      </div>
      <div className={styles.test_row_2}>
          <Search />
          <LiveTV />
      </div>
    </div>
  );
}

export default Test;
