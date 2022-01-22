import "../SCSS/Components/_welcome.scss";

function Welcome() {
    const date = new Date();    
    const hours = date.getHours();
    let timeOfDay;

    if(hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        <h3>Good {timeOfDay} !</h3>    
    );
}

export default Welcome;
