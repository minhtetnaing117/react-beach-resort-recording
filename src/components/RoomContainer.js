// hoc recieve from es5 hoc

import React from 'react'
import { withRoomConsumer } from '../context'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from './Loading'


function RoomContainer({context}){
    const {loading,sortedRooms,rooms} = context
     if(loading){
         return <Loading />
        }
     return (
         <>
        
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
         </>
                   
    );
}

export default withRoomConsumer(RoomContainer)








// normal use Consumer method

// import React from 'react'
// import { RoomConsumer } from '../context'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import Loading from './Loading'

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const {loading,sortedRooms,rooms} = value
//                 if(loading){
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                     Hello from rooms container
//                     <RoomFilter rooms={rooms}/>
//                     <RoomList rooms={sortedRooms}/>
//                 </div>
               
//                 )
//             }}
//          </RoomConsumer>
       
//     )
// }
