import Flex from "../../uikit/Flex/Flex";
import Card from "./Card";
import Topbar from "./Topbar";
import styles from './jobscreen.module.css';

const JobScreen = () => {
  return (
    <Flex className={styles.main}>
      <Topbar />
      <Card />
    </Flex>
  );
};
export default JobScreen;
