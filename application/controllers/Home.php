<?php

/**
 * 
 */
class Home extends CI_Controller
{
	
	function index()
	{
		$this->load->view("home");
	}

	function show()
	{
		$qry=$this->Model1->show_model();
		echo json_encode($qry);
	}

	function edit()
	{
		$id=$this->input->post("id");
		$qry=$this->Model1->edit_model($id);
		echo json_encode($qry);
	}

	function update()
	{
		$id=$this->input->post("id");
		$name=$this->input->post("name");
		$email=$this->input->post("email");
		$qry=$this->Model1->update_model($id,$name,$email);
	}
}
?>