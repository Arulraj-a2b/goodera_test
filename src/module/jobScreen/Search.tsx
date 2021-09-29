import Button from "../../uikit/Button/Button";
import Flex from "../../uikit/Flex/Flex";
import InputText from "../../uikit/InputText/InputText";
import Text from "../../uikit/Text/Text";
import classNames from "classnames/bind";
import styles from "./search.module.css";
import SvgSearch from "../icons/SvgSearch";
import SvgBook from "../icons/SvgBook";
import SvgDowm from "../icons/SvgDown";

const cx = classNames.bind(styles);
const Seacrh = () => {
  return (
    <Flex between row className={cx("overAll")}>
      <Flex row middle>
        <Flex row center style={{ position: "relative" }}>
          <Flex className={styles.svgSearch}>
            <SvgSearch />
          </Flex>
          <InputText
            placeholder={"      Job title or keyword"}
            className={styles.inputStyle}
          />
        </Flex>
      </Flex>

      <Flex row center>
        <Flex row center className={styles.selectTag}>
          <SvgBook className={styles.svgBook} />
          <Flex row center between style={{ width: "100%" }}>
            <Text
              size={16}
              color="gray"
              className={`fontWight400,${cx("searchBtn")}`}
            >
              Select location
            </Text>
            <SvgDowm />
          </Flex>
        </Flex>

        <Button className={`fontWight600,${cx("searchBtn")}`}>Search</Button>
      </Flex>
    </Flex>
  );
};

export default Seacrh;
