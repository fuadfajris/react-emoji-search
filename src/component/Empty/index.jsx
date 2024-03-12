import PropType from "prop-types";

import styles from "./Empty.module.css";

const Empty = ({text}) => {
    return (
        <div className={styles.empty}>
            {text}
        </div>
    );
};

Empty.propType = {
    text: PropType.string.isRequired
}

export default Empty;