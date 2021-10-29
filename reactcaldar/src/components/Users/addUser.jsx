import React from 'react'

const addUser = () => {
    return(
        <div>
            <div>
                <h2>Add A User</h2>
                <form>
                    <div>
                        <input
                        type="text"              
                        placeholder="Enter Your Name"
                        name="name"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default addUser;