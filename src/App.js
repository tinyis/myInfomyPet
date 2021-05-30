import logo from './logo.svg';
import './App.css';


function MyInformation(props){

  return (
    <div>
      <h2>My Information</h2>
      <p>FIO: {props.fio}</p>
      <p>Telephone: {props.email}</p>
      <p>City: {props.city}</p>
      <p>Photo: </p>
      <img src={props.photo}/>
      <p>Experience: </p>
      <ul>
        {props.experience.map(item => (
          <li>{item}</li>
        ))}
      </ul>
      <p>Skills: </p>
      <ul>
        {props.skills.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function MyPet(props){

  return(

    <div>
      <h2>My Pet</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Color: {props.color}</p>
    </div>
  )

}

function App() {
  return (
    <div className="App">
      <MyInformation/>
      <MyPet/>
    </div>
  );
}

MyInformation.defaultProps = { fio: "Zemtsova Valeria Sergeevna",
                                tel: "+380962531434",
                                email: "tinyis97@gmail.com",
                                city: "Krivoy Rog",
                                experience: ["exp1", "exp2", "exp3"],
                                skills: ["skill1", "skill2", "skill3"],
                                photo:"/images/Lucky-.jpg"};
  
  MyPet.defaultProps = { name:"Molly",
                          age: "unknown",
                          color: "grey"}                            

export default App;
