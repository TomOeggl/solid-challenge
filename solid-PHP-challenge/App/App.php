<?php
    include 'ArgsParser.php';
    include 'ArgsReader.php';
    include 'ArgsWriter.php';

    $argString = '--foo --bar baz --numbers 1';
    $parser = new ArgsParser($argString);
    $writer = new ArgsWriter();
    $reader = new ArgsReader();
    $json = $writer->writeJson($parser->getArgs());
    $argString2 = $reader->readJson($json);
    //echo 'Original argument string: '.$argString.'<br>';
    echo 'JSON representation: '.$json.'<br>';
   // echo 'Argument string from JSON: '.$argString2.'<br>';
?>