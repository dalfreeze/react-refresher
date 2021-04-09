import React, { useState } from "react"; //useState is a hook function

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

const App = () => {
  // function-based components
  const [courseGoals, setCourseGoals] = useState([
    // useState returns and array of two elements: 1) latest state snapshot, 2) function to update state and tell react to rerender
    { id: "cg1", text: "Finish the course" },
    { id: "cg2", text: "Learn all about the course main topic" },
    { id: "cg3", text: "Help other students in the course Q&A" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal)); // need this setup if the new state depends on prev state's data (which this one does)
  };

  return (
    <div className="course-goals">
      <h2>Course goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  ); // this is JSX and has to be JSX here
};

export default App;
