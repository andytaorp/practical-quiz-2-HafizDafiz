import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habitName) => {
    // TODO: write code to add a new habit here
    setHabits((prevHabits) => [...prevHabits, habitName]);
  };

  const handleToggleHabit = (id) => {
    // TODO: write code to toggle a habit's status
    setHabits((prevHabits) => prevHabits.map((habitName) => 
        habitName.id === id ? { ...habitName, completed: !habitName.completed } : habitName
      )
    );
    
  };

  const handleDeleteHabit = (id) => {
    // TODO: write code to delete a habit
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <AddHabitForm onAddHabit={handleAddHabit} />
      <HabitList
      habits={habits}
      onDeleteHabit={handleDeleteHabit}
      onToggleHabit={handleToggleHabit}
      />
      {/*TODO: add a form to add a new habit*/}
      {/*TODO: add a list of habits*/}
    </div>
  );
}

export default App;
