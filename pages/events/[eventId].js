import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function EventDetailPage(){
    const router = useRouter();
  
    const eventId=   router .query.eventId;
   const event=getEventById(eventId);
    if(!event){
        return<p>No Event Found!</p>
    }
    return(
    <Fragment>
        <EventSummary titlt={event.title}/>
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
    </Fragment>
    )
 
 }
 
 
 export default EventDetailPage;