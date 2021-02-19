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

	function delete()
	{
		$id=$this->input->post("id");
		$qry=$this->Model1->delete_model($id);
	}

	function insert()
	{
		$name=$this->input->post("name");
		$email=$this->input->post("email");
		$password=$this->input->post("password");
		$gender=$this->input->post("gender");
		$this->load->library('upload');
		$config['upload_path']= './img/';
		$config['allowed_types'] = 'gif|jpg|png';
		$this->upload->initialize($config);
		$this->upload->do_upload('pic');
		$file=$this->upload->data();
		$pic=$file["file_name"];
		$qry=$this->Model1->insert_model($name,$email,$password,$gender,$pic);
	}
}
?>