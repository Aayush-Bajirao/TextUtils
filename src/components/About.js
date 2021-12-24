import React from 'react'

export default function About(props) {



    return (
        <>
            <div className='container my-3'>                              
                <div  className="accordion"  id="accordionExample">
                <h1 style={{color: props.mode==="light"?"black":"white"}} >About Us</h1> 
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button style={{color: props.mode==="light"?"black":"white",backgroundColor: props.mode==="light"?"white":"#1b365c"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div style={{color: props.mode==="light"?"black":"white",backgroundColor: props.mode==="light"?"white":"#495057"}} className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button style={{color: props.mode==="light"?"black":"white",backgroundColor: props.mode==="light"?"white":"#1b365c"}}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free To use
                        </button>
                        </h2>
                        <div style={{color: props.mode==="light"?"black":"white",backgroundColor: props.mode==="light"?"white":"#495057"}} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div  className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button style={{color: props.mode==="light"?"black":"white",backgroundColor: props.mode==="light"?"white":"#1b365c"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                        </h2>
                        <div style={{color: props.mode==="light"?"black":"white",backgroundColor: props.mode==="light"?"white":"#495057"}} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div  className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
