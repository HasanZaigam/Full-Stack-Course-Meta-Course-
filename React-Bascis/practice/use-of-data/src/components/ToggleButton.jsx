// import React from 'react';
// function ToggleButton() {
//     const [isDarkMode, setIsDarkMode] = React.useState(false);
//     const lightModeOn = () => {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
//     const darkModeOn = () => {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     }  
//     const toggleButton = () => {
//         if(isDarkMode){
//             lightModeOn();
//         }else{
//             darkModeOn();
//         }
//         setIsDarkMode(!isDarkMode)
//     }
// return (
//     <>
//     <button onClick = {toggleButton}>{isDarkMode ? "light Mode" : "Dark Mode"}</button>
//     </>
// );
// }
// export default ToggleButton;


import React from 'react';
function ToggleButton () {
    const[isDarkMode, setIsDarkMode] = React.useState(false)
    const darkModeOn = () => {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
    const lightModeOn = () => {
        document.body.style.backgorundColor = 'white';
        document.body.style.color = 'black';
    }
    const toggleButton = () => {
        if(isDarkMode){
            lightModeOn();
        }else{
            darkModeOn();
        }
        setIsDarkMode(!isDarkMode);

    }
    return(
        <>
        <button onClick={toggleButton}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
        </>
    )

}
export default ToggleButton;