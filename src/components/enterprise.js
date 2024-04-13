

const Enterprise = ({updateCurrentPlan}) => {
    return (  
        <div className="enterprise">
            <h2>Enterprise</h2>
            <h1>Let's Talk!</h1>
            <ul className="custom-list">
                <li>All pro features</li>
                <li>Unlimited MAUs</li>
                <li>Dedicated environment</li>
                <li>Enterprise account administration</li>
                <li>Premium support and services</li>
            </ul>
            <button onClick={()=>updateCurrentPlan('Enterprise Trial.Get Unlimited MAUs')}>Contact Us</button>
        </div>
    );
}
 
export default Enterprise;