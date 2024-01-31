import './App.css';
import {useState, useEffect} from "react";
import uuid from "react-uuid";
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndIngredients';

function App() {

  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);

  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])

  const [selectedDay, setSelectedDay] = useState(false);

  const addMeal = () => {
    const newMeal = {
      title: "Today is...",
      id: uuid(),
      mealForADay: "",
      ingredients: ""
    };

    setMealPlans([newMeal, ...mealPlans]);
  }

  const deleteDay = (dayId) => {
    setMealPlans(mealPlans.filter(({id}) => dayId !== id));
  }

  const updateDay = (myUpdatedMeal) => {
    const updatedMeals = mealPlans.map((item) => {
      if (item.id === myUpdatedMeal.id){
        return myUpdatedMeal;
      }
      return item;
    })
    setMealPlans (updatedMeals);
  }

  const getActiveMeal = () => {
    return mealPlans.find(({id}) => id === selectedDay);
  }

  return (
    <div className="App">
      <MyList 
      mealPlans={mealPlans}
      addMeal={addMeal} 
      deleteDay={deleteDay}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      />
      <MyMealsAndIngredients
      selectedDay={getActiveMeal()}
      updateDay={updateDay}
      />
    </div>
  );
}

export default App;
