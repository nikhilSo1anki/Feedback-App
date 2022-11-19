import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import FeedbackStat from './Components/FeedbackStat'
import FeedbackForm from './Components/FeedbackForm'
import About from './Components/About'
import {FeedbackProvider} from './Context/FeedbackContext'

function App(){
    return(
        <FeedbackProvider>
        <Router>
            <Header headerText="Feedback"/>
            <Routes>
            <Route exact path="/" element={<>
                <FeedbackForm />
                <FeedbackStat />
                <FeedbackList />
            </>} >
            </Route>
            <Route exact path="/about" element={<About />}>
            </Route>
            </Routes>
        </Router>
        </FeedbackProvider>
    )
}

export default  App
