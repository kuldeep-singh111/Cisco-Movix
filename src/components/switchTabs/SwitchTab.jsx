import React, { useState } from 'react'
import './style.scss';


const SwitchTab = ({ data, onTabChange }) => {
    const [selectedTab, setSelctedTab] = useState(0)
    const [left, setLeft] = useState(0);

    const acticeTab = (tab, index) => {
        setLeft(index * 100)
        setTimeout(() => {
            setSelctedTab(index);
        }, 200);
        onTabChange(tab, index)
    }


    return (
        <div className='switchingTabs'>
            <div className='tabItems'>
                {data.map((tab, index) => (
                    <span key={index} className={`tabItem ${selectedTab === index ? 'active' : ''}`}
                        onClick={() => acticeTab(tab, index)} > {tab}</span>
                ))}

                <span className='movingBg' style={{ left }}>


                </span>


            </div>


        </div>
    )
}


export default SwitchTab
