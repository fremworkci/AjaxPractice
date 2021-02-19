$(document).ready(function(){
	$("#insert_form").on("submit",function(e){
		e.preventDefault();
		var name=$("#name").val();
		var email=$("#email").val();
		var password=$("#password").val();
		var pic=$("#pic").val();
		var namecheck=/^[A-Za-z. ]{3,20}$/;
		var emailcheck=/^[A-Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
		var passwordcheck=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;	
		var imgcheck=/^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png)$/;
		if(namecheck.test(name))
		{
			// return true;
		}
		else
		{
			$("#err_name").show();
			$("#err_name").html("**Wrong Name");
			// return false;
		}

		if(emailcheck.test(email))
		{
			// return true;
		}
		else
		{
			$("#err_email").show();
			$("#err_email").html("**Wrong email");
			// return false;
		}

		if(passwordcheck.test(password))
		{
			// return true;
		}
		else
		{
			$("#err_password").show();
			$("#err_password").html("**Wrong Password");
			// return false;
		}

		if(imgcheck.test(pic))
		{
			// return true;
		}
		else
		{
			$("#err_image").show();
			$("#err_image").html("**Wrong File");
			// return false;
		}

		if((namecheck.test(name)) && (emailcheck.test(email)) && (passwordcheck.test(password)) )
		{
			var url=BASE_URL+'Home/insert';
			$.ajax({
				url : url,
				method: 'POST',
				data: new FormData(this),
				contentType:false,
				cache:false,
				processData:false,
				success:function(data)
				{
					alert('Success');
				}
			});
		}
		else
		{
			alert("All Field required");
		}
	});


	function show()
	{
		var url=BASE_URL+'Home/display';
		$.ajax({
			url:url,
			type:'POST',
			success:function(data)
			{
				var jdata=JSON.parse(data);
				var html="";
				for(var i=0;i<jdata.length;i++)
				{
					var img="<img src='"+BASE_URL+'img/'+jdata[i].pic+"' style='width:80px; height:80px;'>";
					html+="<tr>"+
					"<td>"+img+"</td>"+
					"<td>"+jdata[i].name+"</td>"+
					"<td>"+jdata[i].email+"</td>"+
					"<td>"+jdata[i].password+"</td>"+
					"<td>"+jdata[i].gender+"</td>"+
					"<td><button class='btn btn-info' id='edit' data-eid='"+jdata[i].id+"'>Edit</button></td>"+
					"<td><button class='btn btn-danger' id='delete' data-did='"+jdata[i].id+"'>Delete</button></td>"+
					"</tr>";

				}
				$("#allrecord").html(html);
			}
		});
	}
	show();


	$(document).on("click","#delete",function(){
		var id=$(this).attr("data-did");
		var url=BASE_URL+'Home/delete';
		$.ajax({
			url : url,
			type: 'POST',
			data:{id:id},
			success:function()
			{
				show();
			}
		});
	});


	$(document).on("click","#edit",function(){
		var id=$(this).attr("data-eid");
		$("#modal").show();
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



	$("#update").click(function(e){
		e.preventDefault();
		var id=$("#e_id").val();
		var name=$("#e_name").val();
		var email=$("#e_email").val();
		var url=BASE_URL+'Home/update';
		$.ajax({
			url : url,
			type: 'POST',
			data:{id:id,name:name,email:email},
			success:function(data)
			{
				alert("Update Success");
				$("#modal").hide();
				show();
			}
		});
	});
});