import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './component/Header';
import FeedbackList from './component/FeedbackList';
import FeedbackData from './Data/FeedbackData';
import FeedbackStats from './component/FeedbackStats';
import FeedbackForm from './component/FeedbackForm';
import AboutPage from './pages/AboutPage';
function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id) => {
        if (window.confirm('are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };
    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}
                                />
                            </>
                        }
                    ></Route>

                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
