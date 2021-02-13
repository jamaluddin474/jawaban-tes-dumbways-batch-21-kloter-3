<?php
// KONEKSI KE DATABASE
$koneksi = mysqli_connect("localhost:3306", "root", "", "test_dumbways") or die("Tidak bisa terhubung ke Database!");
// mysqli_select_db("test_dumbways", $koneksi) or die("Tidak ada Database yang dipilih!");
?>
 
<?php
// PROSES LOGIN
if($_POST['login']){
	$email	= $_POST['email'];
	$pass	= $_POST['password'];
 
	if($email && $pass){
		$cek_db	= "SELECT * FROM author WHERE email='$email'";
		$query	= mysqli_query($koneksi, $cek_db);
		if(mysqli_num_rows($query) != 0){
			$row = mysqli_fetch_assoc($query);
			$db_email = $row['email'];
			$db_pass = $row['password'];
 
			if($email == $db_email && $pass == $db_pass){
				echo '<p><b>Anda berhasil Login!</b></p>';
				// masukkan script lainnya disini
				// seperti Session atau redirect ke halaman admin
			}else{
				echo '<p>Email dan Password tidak cocok!</p>';
			}
		}else{
			echo '<p>Email tidak ada dalam Database!</p>';
		}
	}else{
		echo '<p>Email dan Password masih kosong!</p>';
	}
}
?>

<html>
<head>
	<title>article site</title>
</head>
<body>
 
    <!--/ FORM LOGIN /-->
	<form action="" method="post">
    <table>
    	<tr>
        	<td>Email</td><td>:</td><td><input type="text" name="email"/></td>
        </tr>
        <tr>
        	<td>Password</td><td>:</td><td><input type="password" name="password"/></td>
        </tr>
        <tr>
        	<td></td><td></td><td><input type="submit" name="login" value="Login"/></td>
        </tr>
    </table>
    </form>
 
</body>
</html>