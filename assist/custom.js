$(document).ready(function(){
	//for fetch
	function show()
	{
		var url=BASE_URL+'Home/show';
		$.ajax({
			url : url,
			type: 'POST',
			success:function(data)
			{
				var i;
				var sr=0;
				var html="";
				var jdata=JSON.parse(data);
				for(i=0;i<jdata.length;i++)
				{
					sr++;
					var img="<img src='"+BASE_URL+'img/'+jdata[i].pic+"' style='width:80px; height:80px;'>";
					html+="<tr>"+
					"<td>"+sr+"</td>"+
					"<td>"+img+"</td>"+
					"<td>"+jdata[i].name+"</td>"+
					"<td>"+jdata[i].email+"</td>"+
					"<td>"+jdata[i].password+"</td>"+
					"<td><button class='btn btn-success' id='editbtn' data-eid='"+jdata[i].id+"'>Edit</button></td>"+
					"<td><button class='btn btn-info' id='deletebtn' data-did='"+jdata[i].id+"'>Delete</button></td>"+
					"</tr>";
				}
				$("#allrecord").html(html);
			}
		});
	}
	show();


	//for edit
	$(document).on("click","#editbtn",function(){
		$("#modal").show();
		var id=$(this).attr("data-eid");
		var url=BASE_URL+'Home/edit';
		$.ajax({
			url : url,
			type: 'POST',
			dataType:'json',
			data:{id:id},
			success:function(data)
			{
				$("#e_id").val(data[0].id);
				$("#e_name").val(data[0].name);
				$("#e_email").val(data[0].email);
			}
		});
	});


	//for update
	$("#update").click(function(e){
		e.preventDefault();
		var id=$("#e_id").val();
		var name=$("#e_name").val();
		var email=$("#e_email").val();
		var url=BASE_URL+'Home/update';
		$.ajax({
			url : url,
			type:'POST',
			data:{id:id,name:name,email:email},
			success:function(data)
			{
				$("#modal").hide();
				alert("Update success");
				show();
			}
		});
	});

	//for delete
	$(document).on("click","#deletebtn",function(){
		var id=$(this).attr("data-did");
		var url=BASE_URL+'Home/delete';
		var c=confirm("Are You Sure");
		if(c==true)
		{
			$.ajax({
				url : url,
				type:'POST',
				data:{id:id},
				success:function(data)
				{
					show();
				}
			});
		}
		else
		{
			alert("No");
		}
	});


	//for insert
	$("#insert_form").on("submit",function(e){
		e.preventDefault();
		var name=$("#name").val();
		var email=$("#email").val();
		var password=$("#password").val();
		var pic=$("#pic").val();

		var namecheck=/^[A-Za-z. ]{3,20}$/;
		var emailcheck=/^[A-Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
		var passwordcheck=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
		var piccheck=/^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png)$/;
		if(namecheck.test(name))
		{
			$("#err_name").hide();
		}
		else
		{
			$("#err_name").html("Not Valid Name");
			// return false;
		}

		//for email
		if(emailcheck.test(email))
		{
			$("#err_email").hide();
		}
		else
		{
			$("#err_email").html("Email Not Valid");
			// return false;
		}  

		//for password
		if(passwordcheck.test(password))
		{
			$("#err_password").hide();
		}
		else
		{
			$("#err_password").html("Password Not Valid");
			// return false;
		} 

		//pic
		if(piccheck.test(pic))
		{
			$("#err_image").hide();
		}
		else
		{
			$("#err_image").html("Image Not Valid");
			// return false;
		}

		//before insert check
		if((namecheck.test(name)==true) && (emailcheck.test(email)==true) && (passwordcheck.test(password)==true) && (piccheck.test(pic)==true))
		{
			var url=BASE_URL+'Home/insert';
			$.ajax({
				url : url,
				type: 'POST',
				data:new FormData(this),
				contentType:false,
				cache:false,
				processData:false,
				success:function(data)
				{
					alert("Insert Success");
					$("#insert_form").trigger("reset");
				}
			});
		}


	});

});