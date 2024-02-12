import EventItem from './event-item';
import Classes from './event-list.module.css'
function EventList(props){
    
     const {items}= props;
return (
    <ul className={Classes.list}>
                {items.map((event)=>(
            <EventItem 
          
           key={event.id}
           id={event.id} 
           location={event.location}
             title={event.title} 
             date={ event.date}
              image={event.image}
                  />
                    ))}
    </ul>
);

}
export default EventList;

