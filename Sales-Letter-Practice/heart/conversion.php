<?php
	header('P3P:CP="IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT"');
	header("Content-type: image/png");
	readfile("img/blank.png");
	//prevent caching so page will always check valid cookie
	header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
	header("Cache-Control: post-check=0, pre-check=0", false);
	header("Pragma: no-cache");

	date_default_timezone_set('America/New_York');
	$currTime = date('Y-m-d H:i:s');
	$eligible = false;
	$new = false;
	$continuity = empty($_GET['cont']) ? "" : $_GET['cont'];
	if(isset($_COOKIE['_info'])){
		$infoRet = unserialize($_COOKIE['_info']);
		if($infoRet['LCT']){
			$to_time = strtotime($currTime);
			$from_time = strtotime($infoRet['LCT']);
			$diff = round(abs($to_time - $from_time) / 60,2);
			if($diff > 30) $eligible = true;
		}
		include("inc/conn.php");
		$mysqli = new mysqli($host,$user,$pass);
		if($mysqli->connect_errno){
			$error = true;
			$errorDesc = "DB connection error.";
		}
		else{
			$mysqli->select_db($name);
			if(!$infoRet['convert']){
				if($continuity){
					if($stmt = $mysqli->prepare("UPDATE `infoVar` SET continuity=continuity+1 WHERE id = ?")){
						$stmt->bind_param('s',$infoRet['ivid']);
						if($stmt->execute()){
							$stmt->close();
							$infoRet['convert'] = 1;
							$infoRet['LCT'] = $currTime;
							$new = true;
						}
						else{
							//error execute update infoVar continuity conv
						}
					}
					else{
						//error prep update infoVar continuity conv
					}
				}
				else{
					echo("<script>console.log('PHP: 4');</script>");
					if($stmt = $mysqli->prepare("UPDATE `infoVar` SET nonContinuity=nonContinuity+1 WHERE id = ?")){
						$stmt->bind_param('i',$infoRet['ivid']);
						if($stmt->execute()){
							$stmt->close();
							$infoRet['convert'] = 1;
							$infoRet['LCT'] = $currTime;
							$new = true;
						}
						else{
							//error execute update infoVar nonCont conv
						}
					}
					else{
						//error prep update infoVar nonCont conv
					}
				}
			}
			else if($eligible){
				if($continuity){
					if($stmt = $mysqli->prepare("UPDATE `infoVar` SET returnCont=returnCont+1 WHERE id = ?")){
						$stmt->bind_param('s',$infoRet['ivid']);
						if($stmt->execute()){
							$stmt->close();
							$infoRet['convert']++;
							$infoRet['LCT'] = $currTime;
						}
						else{
							//error execute update infoVar return cont conv
						}
					}
					else{
						//error prep update infoVar return cont conv
					}
				}
				else{
					if($stmt = $mysqli->prepare("UPDATE `infoVar` SET returnNonCont=returnNonCont+1 WHERE id = ?")){
						$stmt->bind_param('s',$infoRet['ivid']);
						if($stmt->execute()){
							$stmt->close();
							$infoRet['convert']++;
							$infoRet['LCT'] = $currTime;
						}
						else{
							//error execute update infoVar return nonCont conv
						}
					}
					else{
						//error prep update infoVar return nonCont conv
					}
				}
			}
			$mysqli->close();
		}
		setcookie("_info",serialize($infoRet));
	}
?>