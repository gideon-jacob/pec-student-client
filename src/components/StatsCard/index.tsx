import React from 'react'
import './index.scss'

interface Props {
    description: string;
    metric: string;
}

const StatsCard: React.FC<Props> = props => {
    const { description, metric } = props

    return (
        <div className='stats-card'>
            <p className='metric'>{metric}</p>
            <p className='description'>{description}</p>
        </div>
    );
}

export default StatsCard