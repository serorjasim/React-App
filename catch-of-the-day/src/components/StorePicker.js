import React from "react";

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="store Name" />
                <button type="submit">Visit Store &#x2192;</button>
            </form>
        )
    }
}

export default StorePicker;