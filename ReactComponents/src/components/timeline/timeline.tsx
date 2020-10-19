import React from 'react';
import { TimelineItem } from '../../data/models/timeline-item';
import './timeline.css';

declare var window: any;

/**
 * Timeline component
 */
function Timeline() {

    const dummyTimelineData: TimelineItem[] = [
        {
            timestamp: new Date('2020-10-24 10:55:00'),
            title: '',
            content: 'Reference value plan transmission',
            level: 'warn'
        },
        {
            timestamp: new Date('2020-10-24 12:00:00'),
            title: 'Start bidding',
            content: 'DR Announced'
        },
        {
            timestamp: new Date('2020-10-24 13:00:00'),
            title: '',
            content: 'Next week adjustment unit price'
        }
    ];

    const formatDate = (date: Date) => {
        return date.getMonth() + '/' + date.getDate();
    }

    const formatTime = (date: Date) => {
        return date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2);
    }

    return <div className="timeline-wrap">
        <div className="timeline">
            {dummyTimelineData.map((tlItem, index) => <div key={index} className="right timeline-item visible">
                <div className="time-section">
                    <div className="date">{formatDate(tlItem.timestamp)}</div>
                    <div className="time">{formatTime(tlItem.timestamp)}</div>
                </div>
                <div className="content">
                    <div className={`timeline-title ${tlItem.level}`}>{tlItem.title}</div>
                    <div className="main-content">
                        <div style={{ marginBottom: '10px' }}>{tlItem.content}</div>
                    </div>
                </div>
            </div>)}
        </div>
    </div>;
}

export default Timeline;
