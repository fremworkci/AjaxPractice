<!DOCTYPE html>
<html>
<head>
	<title></title>
	<?php include("css.php"); ?>
	<style>
		#modal
		{
			background-color: rgba(0,0,0,0.7);
			height: 100%;
			width: 100%;
			position: fixed;
			top: 0px;
			left: 0px;
			display: none;
		}
		#modal-form
		{
			background-color: white;
			width: 30%;
			height: auto;
			margin-left: 30%;
			margin-top: 100px;
			border-radius: 8px;
			padding: 10px;
			position: absolute;
		}
		#close-btn
		{
			background-color: red;
			color: white;
			width: 30px;
			height: 30px;
			position: absolute;
			top: -15px;
			right: -15px;
			text-align: center;
			border-radius: 8px;
			cursor: pointer;
		}
	</style>
</head>
<body>
<div class="container">
	<div class="row">
		<div class="col-xl-3"></div>
		<div class="col-xl-6">
			<form id="insert_form" enctype="multipart/form-data">
				<div class="form-group">
					<label>Name : </label>
					<input type="text" name="name" id="name" class="form-control">
					<span id="err_name"></span>
				</div>
				<div class="form-group">
					<label>Email : </label>
					<input type="text" name="email" id="email" class="form-control">
					<span id="err_email"></span>
				</div>
				<div class="form-group">
					<label>Password : </label>
					<input type="text" name="password" id="password" class="form-control">
					<span id="err_password"></span>
				</div>
				<div class="form-group">
					<label>Gender : </label>
					<input type="radio" name="gender" id="gender" value="Male" class="radio-inline">Male
					<input type="radio" name="gender" id="gender" value="Female" class="radio-inline">Female
				</div>
				<div class="form-group">
					<label>Image : </label>
					<input type="file" name="pic" id="pic" class="form-control">
					<span id="err_image"></span>
				</div>
				<input type="submit" name="submit" value="Submit" class="btn btn-success">
			</form>
		</div>
	</div><br><br>
	<table class="table" id="allrecord">
		
	</table>
</div>
<div id="modal">
	<div id="modal-form">
		<h2>Edit Data..</h2>
		<form id="editform">
			<input type="hidden" name="id" id="e_id">
			<div class="form-group">
				<label>Name : </label>
				<input type="text" name="name" id="e_name" class="form-control">
			</div>
			<div class="form-group">
				<label>Email : </label>
				<input type="text" name="email" id="e_email" class="form-control">
			</div>
			<input type="submit" name="update" value="Update" id="update" class="btn btn-info">
		</form>
	</div>
</div>
</body>
</html>