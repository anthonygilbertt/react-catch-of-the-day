import React from 'react';

class StorePicker extends React.Component {
    // every class needs something called 'render'

    render() {
        // return <p>Hello from StorePicker!</p> 
        return (
            <>
                <p>boop</p>
                <form className="store-selector">
                    { /* this is javascript land */ }
                    <h2>Please Enter A Store</h2>
                    <input type="text" required placeholder='Store Name' />
                    <button type="submit">Visit Store -></button>
                </form>
            </>
        )
    }
}

export default StorePicker;