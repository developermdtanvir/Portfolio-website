import React, { useState } from 'react';
import './LikeButton.css';
export const LikeButton = () => {
    const [reactions, setReactions] = useState([
        { name: 'Like', icon: '👍' },
        { name: 'Love', icon: '❤️' },
        { name: 'Haha', icon: '😂' },
        { name: 'Wow', icon: '😮' },
        { name: 'Sad', icon: '😢' },
        { name: 'Angry', icon: '😠' },]);
    const [selectedReaction, setSelectedReaction] = useState(null);
    const [showReactions, setShowReactions] = useState(false)
    console.log(selectedReaction)
    const handleReactionClick = (reaction) => {
        setSelectedReaction(reaction);
        setShowReactions(false);
    };

    return (
        <div className="like-button-wrapper">
            <button
                className="like-button"
                onMouseOver={() => setShowReactions(true)}
                onMouseLeave={() => setTimeout(() => {
                    setShowReactions(false)
                }, 2000)}
            >
                {selectedReaction ? selectedReaction.icon : 'Like'}
            </button>
            {showReactions && (
                <div className="reactions">
                    {reactions.map((reaction) => (
                        <button
                            key={reaction.name}
                            className="reaction"
                            onClick={() => handleReactionClick(reaction)}
                            title={reaction.name}
                        >
                            {reaction.icon}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
