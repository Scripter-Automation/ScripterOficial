import React, { FormEvent, useContext } from 'react'

type Arguments ={
    children: JSX.Element
}

type Event = FormEvent | undefined | {
   event:Event
   setEvent: (e:FormEvent)=> void
  }

const CurrentEvent = React.createContext<any>(undefined)


export default function EventProvider({children}:Arguments) {

  const [event, setEvent] = React.useState<Event>(undefined)

  return (
    <CurrentEvent.Provider value={{event, setEvent}}>
        {children}
    </CurrentEvent.Provider>
  )
}

export function useEvent(){

  return useContext(CurrentEvent)
}



