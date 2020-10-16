import React from 'react';
import { TimelineItem } from '../../data/models/timeline-item';
import './timeline.css';

declare var window: any;

function Timeline() {

    const dummyTimelineData: TimelineItem[] = [
        {
            timestamp: new Date('04-25-2019'),
            title: 'Latch lock firmware upgraded to 3.0.0',
            type: 'FIRMWARE_UPGRADE',
        },
        {
            timestamp: new Date('04-23-2019'),
            title: 'Problem resolved - Safe malfunction',
            type: 'SERVICE',
            status: 'COMPLETED'
        },
        {
            timestamp: new Date('04-22-2019'),
            title: 'Latch lock replaced with #5789123',
            type: 'PART_CHANGE',
        },
        {
            timestamp: new Date('04-22-2019'),
            title: 'Service started against complaint - Safe malfunction',
            type: 'SERVICE',
            status: 'STARTED'
        },
        {
            timestamp: new Date('04-20-2019'),
            title: 'Complaint registered - Safe malfunctioning',
            type: 'SERVICE',
            status: 'REQUESTED'
        },
        {
            timestamp: new Date('02-14-2019'),
            title: 'Annual servicing completed',
            type: 'SERVICE',
            status: 'COMPLETED'
        },
        {
            timestamp: new Date('06-25-2018'),
            title: 'Safe inspections and servicing has carried out by service team',
            type: 'SERVICE',
            status: 'STARTED'
        },
        {
            timestamp: new Date('02-14-2019'),
            title: 'Annual servicing',
            type: 'SERVICE',
            status: 'REQUESTED'
        },
        {
            timestamp: new Date('02-14-2018'),
            title: 'Product installed successfully in the specified site'
        },
        {
            timestamp: new Date('02-05-2018'),
            title: 'Order placed'
        },
        {
            timestamp: new Date('01-15-2018'),
            title: 'Product available for selling'
        },
        {
            timestamp: new Date('01-01-2018'),
            title: 'Product Manufactured'
        }
    ];

    return <div className="timeline-wrap">
        <div className="timeline">
            {dummyTimelineData.map((tlItem, index) => <div key={index} className="right timeline-item visible">
                <div className="content">
                    <div className="timeline-title">Title</div>
                    <div className="main-content">
                        <div style={{ marginBottom: '10px' }}>{tlItem.title}</div>
                    </div>
                </div>
            </div>)}
        </div>
    </div>;
}

export default Timeline;
