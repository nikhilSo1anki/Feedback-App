import { createContext,useEffect,useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    const fetchData = async () => {
        const response = await fetch("http://localhost:5000/feedback");
        const data = await response.json();

        setFeedback(data);
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchData()
    },[])


    const [editFeedback, setEditFeedback] = useState({item:{},edit:false})

    const deleteItem = async (id)=>{
        await fetch(`http://localhost:5000/feedback/${id}`,{
            method: 'DELETE',
        })
        
        setFeedback(feedback.filter((item)=>item.id !== id));
    }

    const handleAddFeedback = async (newFeedback)=> {
        if(editFeedback.edit){
            const response = await fetch(`http://localhost:5000/feedback/${editFeedback.item.id}`,{
                method: 'PUT',
                headers : {
                    "Content-type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(newFeedback)
            });

            const data =await response.json();
            
            setFeedback(feedback.map((item)=>(item.id === editFeedback.item.id ? {...item,...data} : item)));
            setEditFeedback({item:{},edit:false})
        } else {
            const response = await fetch('http://localhost:5000/feedback', {
                method: 'POST',
                headers: {
                    'Content-type': "application/json; charset=utf-8",
                },
                body: JSON.stringify(newFeedback),
            });

            const data = await response.json();

            setFeedback([data,...feedback]);
        }
    }

    const editItem = (item)=> {
        setEditFeedback({item,edit:true})
    }

    return (
        <FeedbackContext.Provider  value={{
            feedback,
            deleteItem,
            handleAddFeedback,
            editItem,
            editFeedback,
            isLoading
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;