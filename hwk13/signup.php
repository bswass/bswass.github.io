<!DOCTYPE html>
<html>
<head>
  <title> Sign-Up Sheet </title>
</head>
<body>
	<?php
		foreach ($_POST as $key => $value) {
			if ($value != "") {
				$sign = fopen("signup.txt", "a");
				fwrite($sign, $key."\n".$value."\n");
				fclose($sign);
			}
		}

		# Create array with times
		$arr = array("8:00am" => "", "9:00am" => "", "10:00am" => "", "11:00am" => "", "12:00pm" => "", "1:00pm" => "", "2:00pm" => "", "3:00pm" => "", "4:00pm" => "", "5:00pm" => "");

		# Read signup.txt
		$myfile = fopen("signup.txt", "r");
		while (!feof($myfile)) {
			$time = fgets($myfile);
			if ($time != "") {
				$time = preg_replace('/\s+/', '', $time);
				$name = fgets($myfile);
				$arr[$time] = $name;
			}
		}
		fclose($myfile);

		# Create table head
		$script = $_SERVER['PHP_SELF'];
		print <<<TOP
		<div align="center">
		<form method = "post" action = "$script">
			<table border="border">
				<caption> Sign-Up Sheet </caption>
		    <tr><td><b>Time</b></td><td><b>Name</b></td></tr>
TOP;

		foreach ($arr as $key => $value) {
			if ($value != ""){
				print ("\n<tr><td>$key</td><td>$value</td></tr>");
			}
			else {
				print("\n");
				print <<<ROW
				<tr><td>$key</td><td><input type="text" name="$key" size="30"></td></tr>
ROW;
			}
		}
		print("\n");
		print <<< BOTTOM
			<tr><td><input type = "submit" value = "Submit" /></td>
        <td><input type = "reset" value = "Reset" /></td></tr>
      </table>
      </form>
      </div>
BOTTOM;
	?>
</body>
</html>