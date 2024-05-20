import React from "react";

const GenderButton = (props) => {

    return (
        <div className="gender-section">
            <div>
                Gender
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value={'Male'}
                        checked={props.genderSelected ==='Male'}
                        onChange={props.handleGender}
                    />
                    &nbsp;Male
                </label>
                <label>
                    <input
                        type="radio"
                        value={'Female'}
                        checked={props.genderSelected ==='Female'}
                        onChange={props.handleGender}
                    />
                    &nbsp;Female
                </label>
                <label>
                    <input
                        type="radio"
                        value={'Others'}
                        checked={props.genderSelected ==='Others'}
                        onChange={props.handleGender}
                    />
                    &nbsp;Others
                </label>
            </div>
            
        </div>
    )
}

export default GenderButton;