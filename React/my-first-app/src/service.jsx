function Service(props) {
  return (
    <div>
        <h2 style={{color: "black"}}>Welcome to the Service Page</h2>
        <h2 style={{color : 'green'}}>{props.name}</h2>
    </div>
  );
}

export default Service;