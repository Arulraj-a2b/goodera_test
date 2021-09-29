import Button from "../../uikit/Button/Button";
import Flex from "../../uikit/Flex/Flex";
import Text from "../../uikit/Text/Text";
import styles from "./card.module.css";
import { sample } from "./mock";

const Card = () => {
  return (
    <Flex middle center wrap row className={styles.overAll}>
      {sample.map((list) => {
        return (
          <Flex
            className={styles.cardStyle}
            style={{
              width: window.innerWidth / 2 ,
              maxWidth: 768 / 2 ,
            }}
          >
            <Flex row>
              <div className={styles.boxStyle} />
              <Flex>
                <Text size={24} style={{ fontWeight: 500 }}>
                  {list.title}
                </Text>
                <Text size={14} color="gray" className={`fontWight500`}>
                  {list.description}
                </Text>
                <Button className={styles.button} secondary>
                  View Details
                </Button>
              </Flex>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Card;
