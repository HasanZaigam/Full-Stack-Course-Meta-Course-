function ParentChild() {

function Dog() {
    return (
        <div>
            <Puppy name="Buddy" bowlShape = "square" bowlStatus = "Full" />
        </div>
    )
}

function Puppy(props) {
    return (
        <div>
            <h3>Hi my dog name is {props.name} and its bowl< Bowl bowlShape= "square" bowlStatus = "Full" /> </h3>
        </div > 
    )
} 

function Bowl(props){
    return (
        <div>
            <h3> Dog: My bowl is {props.bowlShape} and its {props.bowlStatus} </h3>
        </div>
    )
}
return (
    <>
        <Dog />
    </>
);
}

export default ParentChild;