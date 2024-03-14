import PropType from "prop-types";
import styles from "./Input.module.css";

const Input = ({onChange, value}) => {
    return (
        <input 
            className={styles.input}
            onChange={onChange}
            placeholder="Search"
            value={value}    
        />
    );
};

Input.propType = {
    onChange: PropType.func,
    value: PropType.string
}

export default Input;