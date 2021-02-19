<?php

/**
 * 
 */
class Model1 extends CI_Model
{
	function show_model()
	{
		$this->db->select("*");
		$this->db->from("login");
		$qry=$this->db->get();
		return $qry->result();
	}

	function edit_model($id)
	{
		$this->db->select("*");
		$this->db->from("login");
		$this->db->where("id",$id);
		$qry=$this->db->get();
		return $qry->result();
	}

	function update_model($id,$name,$email)
	{
		$this->db->where("id",$id);
		return $this->db->update("login",array("name"=>$name,"email"=>$email));
	}

	function delete_model($id)
	{
		$this->db->where("id",$id);
		return $this->db->delete("login");
	}

	function insert_model($name,$email,$password,$gender,$pic)
	{
		return $this->db->insert("login",array("name"=>$name,"email"=>$email,"password"=>$password,"gender"=>$gender,"pic"=>$pic));
	}
}
?>