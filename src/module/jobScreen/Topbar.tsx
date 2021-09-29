import Flex from "../../uikit/Flex/Flex";
import classNames from "classnames/bind";
import styles from "./topbar.module.css";
import Text from "../../uikit/Text/Text";
import Seacrh from "./Search";
import SvgBag from "../icons/SvgBag";
import SvgLine from "../icons/SvgLine";

const cx = classNames.bind(styles);
const Topbar = () => {
  return (
    <Flex className={cx("overAll")}>
      <Flex between row>
        <Flex row center className={cx("job_hunt_conatiner")}>
          <Flex row center>
            <SvgBag />
            <Text size={18} color="white" className={styles.jobhunt_text}>
              JobHunt
            </Text>
          </Flex>
          <Flex center>
            <Text size={14} color="white" className={styles.find_job_text}>
              Find Jobs
            </Text>
            <SvgLine />
          </Flex>

          <Text size={14} color="white" className={"fontWight400"}>
            Upskill Yourself
          </Text>
        </Flex>
        <Flex row middle>
          <Text
            size={14}
            color="white"
            className={`fontWight500, ${cx("post_text")}`}
          >
            Post a Job
          </Text>
          <Text size={14} color="white" className={"fontWight500"}>
            Sign in
          </Text>
        </Flex>
      </Flex>
      <Flex style={{ paddingTop: 80 }}>
        <Text size={48} color={"white"} className="fontWight800">
          Find Your Dream Job
        </Text>
        <Text size={20} color="white" className="fontWight400">
          Browse through thousands of full-time or part-time jobs near you
        </Text>
      </Flex>
      <Seacrh />
    </Flex>
  );
};
export default Topbar;
