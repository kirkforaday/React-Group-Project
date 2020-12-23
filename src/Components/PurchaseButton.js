import React, {useState} from 'react';

const ButtonUp = ({clickAction}) => {
    return (
        <button onClick={clickAction}>
            +1
        </button>
    );
};

const ButtonDwn = ({clickAction}) => {
    return (
        <button onClick={clickAction}>
            -1
        </button>
    );
};

const ButtonSubmit = ({clickAction}) => {
    return (
        <button onClick={clickAction}>
            Add To Cart
        </button>
    );
};

const Display = ({content}) => (
    <pre>{content}</pre>
);

const CountManager = () => {
    const [count, setCount] = useState(0);

    const incCounter = () => {
        setCount(count + 1);
    }

    const decCounter = () => {
        setCount (count - 1);
    }

    return (
        <div>
            <ButtonUp clickAction={incCounter} />
            <ButtonDwn clickAction={decCounter} />
            <Display content={count} />
            <ButtonSubmit />
        </div>
    );
};
export default CountManager;