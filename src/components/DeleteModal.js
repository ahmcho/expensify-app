import React from 'react';
import Modal from 'react-modal';

const DeleteModal = (props) => (
	<Modal
		isOpen={!!props.isModalOpen}
		onRequestClose={props.handleDeleteSelectedOption}
		contentLabel="Delete modal"
		ariaHideApp={false}
		closeTimeoutMS={200}
		className="modal"
	>
		<h3 className="modal__title">Are you sure you want to delete this expense?</h3>
		<button className="button modal__button" onClick={props.handleCloseAndDelete}>Yes</button>	
        <button className="button modal__button" onClick={props.handleCloseModalAndNotDelete}>No</button>
	</Modal>
)

export default DeleteModal;