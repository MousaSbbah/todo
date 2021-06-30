import React, { useState } from 'react';

export const SettingsContext = React.createContext();

// const SettingsProvider = ({ children }) => {
const SettingsProvider = (props) => {
    const savedSetting =JSON.parse(localStorage.getItem('setting')) || {};
    const [showCompleted , setShowCompleted] = useState(savedSetting.showCompleted || false);
    const [maxItems, setMaxItems] = useState(savedSetting.pageSize || 4);
    const [sort , setSort] = useState(savedSetting.sortBy ||'difficulty');

    const stateDetails = {
        showCompleted,
        maxItems,
        sort,
        toggleCompleted: setShowCompleted,
        changeMaxItems: setMaxItems,
        changeSort: setSort,
    }

    return (
        <SettingsContext.Provider value={stateDetails}>
            {props.children}
        </SettingsContext.Provider>
    );
}

export default SettingsProvider;