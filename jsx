import React from 'react';

const FoodItem = ({ name, image }) => {
    return (
        <div style={styles.container}>
            <img src={image} alt={name} style={styles.image} />
            <h2 style={styles.title}>{name}</h2>
        </div>
    );
};

const styles = {
    container: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        width: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        borderRadius: '8px',
    },
    title: {
        fontSize: '18px',
        margin: '8px 0 0',
    },
};

export default FoodItem;

import React from 'react';
import FoodItem from './FoodItem';

const App = () => {
    const foodData = [
        {
            name: 'Red Peas Soup',
            image: 'https://drive.google.com/file/d/1LkvRUZnUCyRvM9PM8NbBF2BVHrvcLcp8/view?usp=classroom_web&authuser=0', 
        },
        {
            name: 'Escovith Fish',
            image: 'https://drive.google.com/file/d/1LkvRUZnUCyRvM9PM8NbBF2BVHrvcLcp8/view?usp=classroom_web&authuser=0', 
        },
        {
            name: 'Brown Stew Chicken',
            image: 'https://drive.google.com/file/d/1LkvRUZnUCyRvM9PM8NbBF2BVHrvcLcp8/view?usp=classroom_web&authuser=0', 
        },
    ];

    return (
        <div style={styles.appContainer}>
            <h1>Danh Sách Món Ăn</h1>
            <div style={styles.foodList}>
                {foodData.map((food, index) => (
                    <FoodItem key={index} name={food.name} image={food.image} />
                ))}
            </div>
        </div>
    );
};

const styles = {
    appContainer: {
        padding: '20px',
        textAlign: 'center',
    },
    foodList: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
};

export default App;
