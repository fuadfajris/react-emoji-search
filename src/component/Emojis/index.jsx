import PropType from "prop-types";

import styles from "./Emojis.module.css";
import EmojiBox from "../EmojiBox";
import { useEffect, useState } from "react";
import { filterEmojis } from "../../utils/filterEmojis";
import Empty from "../Empty";

const Emojis = ({emojisData, searchText}) => {
    const [filteredEmojis, setFilterdEmojis] = useState([]);

    useEffect(() => {
        setFilterdEmojis(filterEmojis({
            emojisData,
            searchText
        }));
    }, [emojisData, searchText]);

    if (filteredEmojis.length > 0) {
        return (
            <div className={styles.emojisGrid}>
                {filteredEmojis.map((data, index) => (
                    <EmojiBox 
                        key={index} 
                        title={data.title} 
                        symbol={data.symbol} 
                    />
                ))}
            </div>
        );
    } else {
        return (
            <Empty text="Ooops, zero finding, let's try another keyboard" />
        );
    }
};

Emojis.propType = {
    emojisData: PropType.array,
    searchText: PropType.string
}

export default Emojis