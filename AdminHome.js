import React from 'react';
import '../../AdminStyle.css'
export default function AdminApp() {
  return (
    <div>
     
      <header>
        <h1>Office Inventory Management System</h1>
      </header>

      <nav className='adminnav'>
        <ul className='adminul'>
          <li><a className='admina' href="#inventory">Inventory Management</a></li>
          <li><a className='admina'href="#supply-request">Supply Request Management</a></li>
          <li><a className='admina'href="#order">Order Management</a></li>
          <li><a className='admina'href="#reporting">Reporting</a></li>
          <li><a className='admina'href="#user">User Management</a></li>
          <li><a className='admina'href="#notification">Notifications</a></li>
          <li><a className='admina'href="#settings">Settings</a></li>
          <a className='admina'href="/home">Go to User Page</a>
		  <a className='admina'href="/">Logout</a>
        </ul>
      </nav>

      <main>
        <section id="inventory">
          <h2>Inventory Management</h2>
          <p>Current stock levels:</p>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Current Stock</th>
                <th>Reordering Threshold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pens</td>
                <td>50</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Pencils</td>
                <td>30</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Notebooks</td>
                <td>20</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Staplers</td>
                <td>15</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Envelopes</td>
                <td>25</td>
                <td>8</td>
              </tr>
              <tr>
                <td>Scissors</td>
                <td>10</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Highlighters</td>
                <td>40</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Rulers</td>
                <td>12</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Tape Dispensers</td>
                <td>5</td>
                <td>1</td>
              </tr>
              <tr>
                <td>File Folders</td>
                <td>8</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="supply-request">
          <h2>Supply Request Management</h2>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Item Requested</th>
                <th>Date of Request</th>
                <th>Status</th>
              </tr>
            </thead>
			<tbody>
			<tr>
				<td>John Doe</td>
				<td>Pens</td>
				<td>05/01/2023</td>
				<td>Pending</td>
			</tr>
			<tr>
				<td>Jane Smith</td>
				<td>Notebooks</td>
				<td>05/02/2023</td>
				<td>Approved</td>
			</tr>
			<tr>
				<td>Bob Johnson</td>
				<td>Staplers</td>
				<td>05/03/2023</td>
				<td>Pending</td>
			</tr>
			<tr>
				<td>Alice Lee</td>
				<td>Highlighters</td>
				<td>05/04/2023</td>
				<td>Approved</td>
			</tr>
			<tr>
				<td>Michael Chen</td>
				<td>Scissors</td>
				<td>05/05/2023</td>
				<td>Pending</td>
			</tr>
			<tr>
				<td>Emily Kim</td>
				<td>Tape</td>
				<td>05/06/2023</td>
				<td>Approved</td>
			</tr>
			<tr>
				<td>David Wong</td>
				<td>Markers</td>
				<td>05/07/2023</td>
				<td>Pending</td>
			</tr>
			<tr>
				<td>Sarah Patel</td>
				<td>Folders</td>
				<td>05/08/2023</td>
				<td>Approved</td>
			</tr>
			<tr>
				<td>Tom Wilson</td>
				<td>Whiteboard Erasers</td>
				<td>05/09/2023</td>
				<td>Pending</td>
			</tr>
			<tr>
				<td>Olivia Davis</td>
				<td>Glue Sticks</td>
				<td>05/10/2023</td>
				<td>Approved</td>
			</tr>
		</tbody>
			</table>
	</section> 
	<section id="order">
			<h2>Order Management</h2>
			<table>
				<thead>
					<tr>
						<th>Order ID</th>
						<th>User</th>
						<th>Items Ordered</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1234</td>
						<td>John Doe</td>
						<td>Pens, Pencils</td>
						<td>Pending</td>
					</tr>
					<tr>
						<td>5678</td>
						<td>Jane Smith</td>
						<td>Notebooks, Pens</td>
						<td>Approved</td>
					</tr>

<tr>
						<td>9101</td>
						<td>Mike Johnson</td>
						<td>Staplers, Envelopes</td>
						<td>Shipped</td>
					</tr>
				</tbody>
			</table>
		</section>

		<section id="reporting">
		<h2>Reporting</h2>
		<p>Select report:</p>
		<form>
			<select name="report">
				<option value="inventory">Inventory Levels</option>
				<option value="supply-request">Supply Request History</option>
				<option value="order">Order History</option>
			</select>
			<input type="submit" value="Generate Report"/>
		</form>
	</section>

	<section id="user">
		<h2>User Management</h2>
		<table>
			<thead>
				<tr>
					<th>User ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Role</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>John Doe</td>
					<td>john.doe@example.com</td>
					<td>Admin</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Jane Smith</td>
					<td>jane.smith@example.com</td>
					<td>Employee</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Mike Johnson</td>
					<td>mike.johnson@example.com</td>
					<td>Manager</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section id="notification">
		<h2>Notifications</h2>
		<p>No new notifications.</p>
	</section>
	<section id="settings">
		<h2>Settings</h2>
		<form>
		<label for="reordering-threshold">Reordering Threshold:</label>
		<input type="number" name="reordering-threshold" id="reordering-threshold" min="1" max="100" value="10"/>
		<br></br>
		<label for="email-notifications">Email Notifications:</label>
			<input type="checkbox" name="email-notifications" id="email-notifications" checked></input>
			<br></br>
			<label for="custom-css">Custom CSS:</label>
			<textarea name="custom-css" id="custom-css"></textarea>
			<br></br>
			<input type="submit" value="Save Settings"></input>
		</form>
	</section>

	</main>
	</div>
  )

			}