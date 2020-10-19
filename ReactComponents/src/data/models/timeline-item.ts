export interface TimelineItem {
    timestamp: Date;
    title: string;
    content: string;
    type?: string;
    status?: string;
    metadata?: any;
    level?: string;
}
