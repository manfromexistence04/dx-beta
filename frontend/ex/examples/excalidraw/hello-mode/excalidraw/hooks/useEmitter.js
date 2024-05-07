import { useEffect, useState } from "react";
export const useEmitter = (emitter, initialState) => {
    const [event, setEvent] = useState(initialState);
    useEffect(() => {
        const unsubscribe = emitter.on((event) => {
            setEvent(event);
        });
        return () => {
            unsubscribe();
        };
    }, [emitter]);
    return event;
};
