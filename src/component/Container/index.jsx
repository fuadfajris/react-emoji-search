import PropType from "prop-types";
import styles from "./Container.module.css";

const Container = ({children}) => {
    return (
        <section className={styles.container}>
            {children}
        </section>
    );
};

Container.propTypes = {
    children: PropType.node
}

export default Container;