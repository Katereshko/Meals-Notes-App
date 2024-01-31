const MyList = ({mealPlans, addMeal, deleteDay, selectedDay, setSelectedDay}) =>{
  return(
    <div className="list_container">
      <div>
        <h1>Weekly meal plan ideas</h1>
        <button onClick={addMeal} className="button-add">
          Add
        </button>
      </div>
      <div className="container">
        {mealPlans.map(({id, title, mealForADay}) => (
          <div key={id} className={`meal ${id === selectedDay ? "selected" : "default"}`}
          onClick = {() => setSelectedDay(id)}>
            <p className="field">{title}</p>
            <p className="field">{mealForADay.substring(0, 60)}</p>
            <button className="button-delete" onClick={() => deleteDay(id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyList;