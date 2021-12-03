import React from 'react'
import MainStory from '../components/MainStory'
import "../styles/Stories.css"

const StoriesSection = () => {
    return (
        <div className="stories-section">
            <div className="customer-box">
                <MainStory />
            </div>
        </div>
    )
}

export default StoriesSection
