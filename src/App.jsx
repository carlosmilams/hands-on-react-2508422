function App() {
  const name = "StarGazers"
  const style = {color:"SteelBlue"}
  return (
    <article>
      <hgroup>
        <img src="images/group.svg" alt="StarGazers Group" />
        <h1>Meet the <i style={style} >{name}</i></h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <button className="outline" onClick={()=> alert("Hi there")}>Click Me!</button>
      </hgroup>
    </article>
  )
}
export default App
