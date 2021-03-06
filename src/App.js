import React, { useState, useEffect } from "react"
import List from "./List"
import Alert from "./Alert"

function App() {
	const [name, setName] = useState("")
	const [list, setList] = useState([])
	const [isEditing, setEditing] = useState(false)
	const [editId, setEditID] = useState(null)
	const [alert, setAlert] = useState({ show: true, msg: "", type: "" })

	const handleSubmit = e => {
		e.preventDefault()
		console.log("hello")
		if (!name) {
			// display alert
			// setAlert({show:true,msg:'please enter value',type:'danger'})
		showAlert(true,'please enter value','danger')
		} else if (name && isEditing) {
			// deal with edit
		} else {
			// show alert
			showAlert(true,'item added','success')
			const newItem = { id: new Date().getTime().toString(), title: name }
			setList([...list, newItem])
			setName("")
		}
	}
	const showAlert = (show = false, msg = '', type = '')=>{
		setAlert({ show, msg, type })
	}
	const clearList = () => {
		showAlert(true, 'empty list', 'danger')
		setList([])
	}
	const removeItem =(id)=> (true, 'item removed', 'danger')
	setList(list.filter((item)=>item.id!==id))
	return (
		<section className="section-center">
			<form className="grocery-form" onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} removeAlert={showAlert }/>}

				<h3>grocery bud </h3>
				<div className="form-control">
					<input
						type="text"
						className="grocery"
						placeholder="e.g. milk"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<button type="submit" className="submit-btn">
						{isEditing ? "edit" : "submit"}
					</button>
				</div>
			</form>
			{list.length > 0 && (
				<div className="grocery-container">
					<List items={list} removeItem={removeItem}/>
					<button className="clear-btn" onClick={ clearList}>clear items</button>
				</div>
			)}
		</section>
	)
}

export default App
