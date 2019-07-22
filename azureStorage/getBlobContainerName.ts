import { IEventGridEvent } from '../contracts/eventGrid';

export const getBlobContainerName = <EventGridEventData>(
    eventGridEvent: IEventGridEvent<EventGridEventData>,
): string => {
    const containerNameRegex = /containers\/([\w|-]*)/;
    const matches = eventGridEvent.subject.match(containerNameRegex);

    return matches ? matches[1] : '';
};
