import React from 'react';
import './Menu.css'

function Menu ({handleCommunityClick}) {
		return (
			<div className='nav' >
			{
				 <ul className="side-scroller squares">
		            <li>    
		                <div className="menu-item">
		                    <div className="icon"><i className="fas fa-car"></i></div>
		                    <div className="menu-text">Roadside <br /> Assistance</div>
		                </div>  
		            </li>
		            <li>    
		                <div className="menu-item">
		                    <div className="icon"><i className="fas fa-car-crash"></i></div>
		                    <div className="menu-text">Accident <br />Checklist</div>
		                </div>  
		            </li>
		            <li>    
		                <div className="menu-item">
		                    <div className="icon"><i className="fas fa-money-check-alt"></i></div>
		                    <div className="menu-text">Pay <br />Without <br />Logging <br />In</div>
		                </div>  
		            </li>
		            <li>    
		                <div className="menu-item">
		                    <div className="icon"><i className="fab fa-stack-exchange"></i></div>
		                    <div className="menu-text">Contact <br />Us</div>
		                </div>  
		            </li>
		            <li>    
		                <div className="menu-item">
		                    <div className="icon"><i className="fas fa-money-bill-wave"></i></div>
		                    <div className="menu-text">ATM <br />Locator</div>
		                </div>  
		            </li>
		            <li>    
		                <div className="menu-item">
		                    <div className="icon"><i className="fas fa-quote-right"></i></div>
		                    <div className="menu-text">Get a Quote</div>
		                </div>  
		            </li>
		            <li>    
		                <div className="menu-item">
		                    <div className="icon"><i className="fas fa-user-shield"></i></div>
		                    <div className="menu-text">Legal & <br />Privacy</div>
		                </div>  
		            </li>
		            <li>    
		                <div className="menu-item" onClick={handleCommunityClick}>
		                    <div className="icon"><i className="fas fa-trophy"></i></div>
		                    <div className="menu-text">State Farm <br />Community</div>
		                </div>  
		            </li>
		        </ul>
			}
		       
			</div>
		);
}
export default Menu;
