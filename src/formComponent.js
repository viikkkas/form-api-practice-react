import React from 'react'

function FormComponent(props) {
    return(
        <div>
            <p align="center">
                <input 
                    type="text"
                    name="firstName"
                    value={props.data.firstName}
                    placeholder="First Name"
                    onChange={props.handleChange}
                />{" "}
                <input 
                    type="text"
                    name="lastName"
                    value={props.data.lastName}
                    placeholder="Last Name"
                    onChange={props.handleChange}
                />

                <br />
                <input 
                    type="text"
                    name="age"
                    value={props.data.age}
                    placeholder="Age"
                    onChange={props.handleChange}
                />

                <br/>
                <input 
                    type="radio"
                    name="gender"
                    value="male"
                    checked={props.data.gender === "male"}
                    onChange={props.handleChange}
                />{" "}Male
                <input 
                    type="radio"
                    name="gender"
                    value="female"
                    checked={props.data.gender === "female"}
                    onChange={props.handleChange}
                />{" "}Female


                <br />
                <select
                    name="destination"
                    value={props.data.destination}
                    onChange={props.handleChange}
                >
                    <option>---Select a destination---</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Hogwarts">Hogwarts</option>
                    <option value="Buckingham">Buckingham</option>
                    <option value="Bihar">Bihar</option>
                </select>

                <br />
                Diet<br />
                Vegan?
                <input
                    type="checkbox"
                    name="isVegan"
                    onChange={props.handleChange}
                    checked={props.data.isVegan}
                />{" "}
                Kosher?
                <input
                    type="checkbox"
                    name="isKosher"
                    onChange={props.handleChange}
                    checked={props.data.isKosher}
                />{" "}
                Lactose Intolerant?
                <input
                    type="checkbox"
                    name="isLactose"
                    onChange={props.handleChange}
                    checked={props.data.isLactose}
                />{" "}
                <hr />

                <h2>Entered Information</h2>
                Name : {props.data.firstName} {props.data.lastName} <br />
                Age : {props.data.age}<br />
                Gender: {props.data.gender}<br />
                Destination: {props.data.destination}<br />
                Vegan: {props.data.isVegan ? "Yes" : "No"} <br />
                Kosher: {props.data.isKosher ? "Yes" : "No"} <br />
                Lactose Intolerant: {props.data.isLactose ? "Yes" : "No"}
            </p>
        </div>
    )
}

export default FormComponent