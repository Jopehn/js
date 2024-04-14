<?php
$number=(int)($_REQUEST['number']);
?>
<p><?php echo num_rev($number); ?></p>
<p><?php echo num_count($number); ?></p>
<?
//function to reverse a number
function num_rev(int $num) : int {
    $rev=0;
    while ($num!=0) {
        $rev=$num % 10 +$rev*10;
        $num=(int)($num/10);
    }
    return $rev;
}
// function to count number of digits in a number
function num_count(int $num) : int {
    $count=0;
    while ($num!=0) {
        $num=(int)($num/10);
        $count++;
    }
    return $count;
}
?>