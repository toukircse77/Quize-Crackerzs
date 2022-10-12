import React from 'react'
import { useLoaderData } from 'react-router-dom';
import TopicDatails from '../topicDetails/TopicDatails';

const Topic = () => {
    const topics = useLoaderData().data;

    return (
        <div className='grid grid-cols-1 md:grid-cols-4'>
           {
            topics.map(topic=><TopicDatails key={topic.id} topic={topic}>

            </TopicDatails>)
           } 
        </div>
    );
};

export default Topic;