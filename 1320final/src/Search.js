import React from "react";


function Search(props){
    return(
        <div className="container">
            <div className="row">
               <section className="col s4 offset-s4">
                <form action="" onSubmit={props.handleSubmit}>
                    <input placeholder = "Find Your Movie"type="text" onChange={props.handleChange} />
                </form>
               </section>
            </div>
        </div>
    )
}
export default Search;