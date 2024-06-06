import React from 'react'
import CommentList from './CommentList'


const commentData = [
    {
        name: "Virat Kohli",
        text: "Father of Pakistan",
        replies: [{
            name: "Virat Kohli",
            text: "Father of Pakistan",
            replies: [{
                name: "ABD",
                text: "Father of Pakistan",
                replies: []
            },{
                name: "ABD",
                text: "Father of Pakistan",
                replies: [{
                    name: "Dale Styen",
                    text: "Father of Pakistan",
                    replies: []
                },{
                    name: "Dale Styen",
                    text: "Father of Pakistan",
                    replies: []
                }]
            }]
        }, {
            name: "Virat Kohli",
            text: "Father of Pakistan",
            replies: []
        }, {
            name: "Virat Kohli",
            text: "Father of Pakistan",
            replies: []
        }, {
            name: "Virat Kohli",
            text: "Father of Pakistan",
            replies: []
        },]
    },
    {
        name: "Virat Kohli",
        text: "Father of Pakistan",
        replies: []
    },
    {
        name: "Virat Kohli",
        text: "Father of Pakistan",
        replies: []
    },
    {
        name: "Virat Kohli",
        text: "Father of Pakistan",
        replies: [
            {
                name: "Virat Kohli",
                text: "Father of Pakistan",
                replies: []
            }, {
                name: "Virat Kohli",
                text: "Father of Pakistan",
                replies: []
            },
        ]
    },
    {
        name: "Virat Kohli",
        text: "Father of Pakistan",
        replies: []
    },
    {
        name: "Virat Kohli",
        text: "Father of Pakistan",
        replies: []
    },
    {
        name: "Virat Kohli",
        text: "Father of Pakistan",
        replies: [{
            name: "Virat Kohli",
            text: "Father of Pakistan",
            replies: []
        }, {
            name: "Virat Kohli",
            text: "Father of Pakistan",
            replies: []
        }, {
            name: "Virat Kohli",
            text: "Father of Pakistan",
            replies: []
        },]
    },

]

const CommentContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments</h1>
            <CommentList comments={commentData}/>
        </div>
    )
}

export default CommentContainer