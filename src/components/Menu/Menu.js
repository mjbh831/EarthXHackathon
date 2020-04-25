import React, { Component } from 'react';
import './Menu.css'

function Menu () {
		return (
			<div className='nav' >
			{
				 <ul class="side-scroller squares">
		            <li>    
		                <div class="menu-item">
		                    <div class="icon"><i class="fas fa-car"></i></div>
		                    <div class="menu-text">Roadside <br /> Assistance</div>
		                </div>  
		            </li>
		            <li>    
		                <div class="menu-item">
		                    <div class="icon"><i class="fas fa-car-crash"></i></div>
		                    <div class="menu-text">Accident <br />Checklist</div>
		                </div>  
		            </li>
		            <li>    
		                <div class="menu-item">
		                    <div class="icon"><i class="fas fa-money-check-alt"></i></div>
		                    <div class="menu-text">Pay <br />Without <br />Logging <br />In</div>
		                </div>  
		            </li>
		            <li>    
		                <div class="menu-item">
		                    <div class="icon"><i class="fab fa-stack-exchange"></i></div>
		                    <div class="menu-text">Contact <br />Us</div>
		                </div>  
		            </li>
		            <li>    
		                <div class="menu-item">
		                    <div class="icon"><i class="fas fa-money-bill-wave"></i></div>
		                    <div class="menu-text">ATM <br />Locator</div>
		                </div>  
		            </li>
		            <li>    
		                <div class="menu-item">
		                    <div class="icon"><i class="fas fa-quote-right"></i></div>
		                    <div class="menu-text">Get a Quote</div>
		                </div>  
		            </li>
		            <li>    
		                <div class="menu-item">
		                    <div class="icon"><i class="fas fa-user-shield"></i></div>
		                    <div class="menu-text">Legal & <br />Privacy</div>
		                </div>  
		            </li>
		            <li>    
		                <div class="menu-item">
		                    <div class="icon"><i class="fas fa-trophy"></i></div>
		                    <div class="menu-text">State Farm <br />Community</div>
		                </div>  
		            </li>
		        </ul>
			}
		       
			</div>
		);
}
export default Menu;
