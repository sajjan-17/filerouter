import { getAllEvents } from "@/dummy-data";

import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { Fragment } from "react";
function AllEventsPages(){
    const evets=getAllEvents();
    return(
        <Fragment>
            <EventsSearch/>
           <EventList items={evets}/>
           </Fragment>
        

    )
}
export default AllEventsPages;