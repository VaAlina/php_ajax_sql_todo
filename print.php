<?php


if (mysqli_num_rows($result) > 0) {
    echo "<table class='table table-hover'>".
                "<thead>".
                "</thead>".
                "<tbody>";
    $i = 1;
    $firstItemPagination = true;
    $anchors = array();
    while($row = mysqli_fetch_assoc($result)) {
        if($row["ok"] == 1){
            $isDone = "";
            $styleItem = "glyphicon-ok";
        }else{
            $isDone = "mark as done ";
            $styleItem = "";
        }
        echo "<tr class='task_row' id='task_".$row["id"]."'>".
                "<td>" . $row["id"]." - ".$row["task"]. "</td>".
                "<td>" . $row["firstname"]. "</td>".
                "<td>" . $row["email"]. "</td>".
                "<td><img src='" . $row["img"]. "'/>". $row["img"]."</td>".
                "<td>".
                  "<span onclick='markTaskAsDone(".$row["id"].")'>".$isDone."</span><span class='glyphicon ".$styleItem."' onclick='markTaskAsDone(".$row["id"].")'></span>".
                  "<span class='glyphicon glyphicon-pencil' onclick='editTask(".$row["id"].")'></span>".
                  "<span class='glyphicon glyphicon-remove' onclick='removeTask(".$row["id"].")'></span>".
                "</td>".
              "</tr>";
        if($firstItemPagination){
            array_push($anchors, "task_".$row["id"]);
            $firstItemPagination = false;
        }else if($i == 3){
            array_push($anchors, "task_".$row["id"]); $i = 0;
        }else if($i < 3){           
        }else{
            $i = 0;
        };
        $i++;
    };
    echo "</tbody></table>";
    //print_r($anchors);
    echo "<ul class='pagination pagination-md'>";
    foreach ($anchors  as $key => $value) {
        echo "<li onclick='doPagination()'><a href='#".$value."'>".$key."</a></li>";
    }
    echo "</ul>";
} else {
    echo "0 results";
}
//Get all tasks from the table. End.




?>